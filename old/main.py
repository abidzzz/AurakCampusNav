from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_office_hours_for_faculty(faculty_name):
    """Get office hours for a specific faculty member"""
    conn = sqlite3.connect('data/campus.db')
    cursor = conn.cursor()
    cursor.execute("""
        SELECT day, time 
        FROM schedule 
        WHERE faculty LIKE ?
        ORDER BY day
    """, (f"%{faculty_name}%",))
    hours = cursor.fetchall()
    conn.close()
    return [{"day": h[0], "time": h[1]} for h in hours]

@app.get("/search")
def search(q: str = Query("", min_length=0)):
    conn = sqlite3.connect('data/campus.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    if not q:
        cursor.execute("""
            SELECT DISTINCT faculty, office, school, department 
            FROM schedule 
            LIMIT 50
        """)
    else:
        search_term = f"%{q}%"
        cursor.execute("""
            SELECT DISTINCT faculty, office, school, department 
            FROM schedule 
            WHERE faculty LIKE ? OR office LIKE ? OR department LIKE ? OR school LIKE ?
            LIMIT 50
        """, (search_term, search_term, search_term, search_term))
    
    results = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    formatted_results = []
    for row in results:
        office_hours = get_office_hours_for_faculty(row['faculty'])
        formatted_results.append({
            "name": row['faculty'],
            "office": row['office'],
            "building": row['office'].split()[0] if row['office'] else "",
            "title": row.get('department', ''),
            "school": row.get('school', ''),
            "office_hours": office_hours
        })
    
    return {"results": formatted_results}

@app.get("/office-hours")
def get_office_hours(faculty: str = Query(..., min_length=1)):
    """Get office hours for a specific faculty member"""
    conn = sqlite3.connect('data/campus.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute("""
        SELECT day, time, office 
        FROM schedule 
        WHERE faculty LIKE ?
        ORDER BY day
    """, (f"%{faculty}%",))
    
    results = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return {"results": results}

@app.get("/buildings")
def get_buildings():
    conn = sqlite3.connect('data/campus.db')
    cursor = conn.cursor()
    cursor.execute("""
        SELECT DISTINCT 
            CASE 
                WHEN office LIKE '% %' THEN SUBSTR(office, 1, INSTR(office, ' ') - 1)
                ELSE office 
            END as building
        FROM schedule 
        WHERE office != '' AND office IS NOT NULL
    """)
    buildings = [row[0] for row in cursor.fetchall() if row[0]]
    conn.close()
    return {"buildings": buildings}

@app.get("/faculty-details")
def get_faculty_details(name: str = Query(..., min_length=1)):
    """Get all details for a specific faculty member including office hours"""
    conn = sqlite3.connect('data/campus.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # Get faculty info
    cursor.execute("""
        SELECT DISTINCT faculty, office, school, department 
        FROM schedule 
        WHERE faculty LIKE ?
        LIMIT 1
    """, (f"%{name}%",))
    
    faculty_info = cursor.fetchone()
    
    if not faculty_info:
        conn.close()
        return {"error": "Faculty not found"}
    
    # Get office hours
    cursor.execute("""
        SELECT day, time 
        FROM schedule 
        WHERE faculty LIKE ?
        ORDER BY day
    """, (f"%{name}%",))
    
    hours = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return {
        "name": faculty_info['faculty'],
        "office": faculty_info['office'],
        "building": faculty_info['office'].split()[0] if faculty_info['office'] else "",
        "school": faculty_info['school'],
        "department": faculty_info['department'],
        "office_hours": hours
    }

@app.get("/building-faculty")
def get_building_faculty(building: str = Query(..., min_length=1)):
    """Get all faculty in a building with their office hours"""
    conn = sqlite3.connect('data/campus.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # Search for faculty whose office starts with the building code
    search_term = f"{building}%"
    cursor.execute("""
        SELECT DISTINCT faculty, office, school, department 
        FROM schedule 
        WHERE office LIKE ? 
        ORDER BY faculty
    """, (search_term,))
    
    results = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    formatted_results = []
    for row in results:
        # Get office hours for this faculty
        office_hours = get_office_hours_for_faculty(row['faculty'])
        formatted_results.append({
            "name": row['faculty'],
            "office": row['office'],
            "building": row['office'].split()[0] if row['office'] else building,
            "title": row.get('department', ''),
            "school": row.get('school', ''),
            "office_hours": office_hours
        })
    
    return {"results": formatted_results, "building": building}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)