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

@app.get("/search")
def search(q: str = Query("", min_length=0)):
    conn = sqlite3.connect('data/campus.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    if not q:
        cursor.execute("SELECT name, title, office, building, profile_url FROM faculty LIMIT 20")
    else:
        search_term = f"%{q}%"
        cursor.execute("""
            SELECT name, title, office, building, profile_url 
            FROM faculty 
            WHERE name LIKE ? OR office LIKE ? OR building LIKE ?
            LIMIT 50
        """, (search_term, search_term, search_term))
    
    results = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return {"results": results}

@app.get("/buildings")
def get_buildings():
    conn = sqlite3.connect('campus.db')
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT building FROM faculty WHERE building != '' AND building IS NOT NULL")
    buildings = [row[0] for row in cursor.fetchall()]
    conn.close()
    return {"buildings": buildings}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)