// Faculty office-hours data.
// This is your normal CSV export, pasted as-is between the backticks below.
// TO UPDATE EACH SEMESTER: open this file, select everything between the backticks,
// delete it, and paste in your new CSV export (same columns, same order):
//   semester, school, faculty, department, day, time, office
// Save the file and refresh index.html -- nothing else needs to change.

const FACULTY_CSV = `semester,school,faculty,department,day,time,office
Fall 2026,School of Business,Prof. Tahseen Arshi,,Mon-Tue-Wed-Thu,11:00 AM – 3:00 PM or by appointment,H-301 B
Fall 2026,School of Business,Dr. Abdelfatah Arman,,Mon-Wed,9:00 AM – 10:30 AM,H-301 D
Fall 2026,School of Business,Dr. Abdelfatah Arman,,Mon-Wed,1:30 PM – 2:30 PM,H-301 D
Fall 2026,School of Business,Dr. Abdelfatah Arman,,Tue-Thu,10:00 AM – 1:30 PM,H-301 D
Fall 2026,School of Business,Dr. Abdelfatah Arman,,Fri,10:00 AM – 12:00 PM,H-301 D
Fall 2026,School of Business,Dr. Khalid Khan,Management Department,Mon-Wed,10:15 AM – 12:15 PM,H-323
Fall 2026,School of Business,Dr. Khalid Khan,Management Department,Mon-Wed,2:00 PM – 3:00 PM,H-323
Fall 2026,School of Business,Dr. Khalid Khan,Management Department,Tue-Thu,11:45 AM – 12:45 PM,H-323
Fall 2026,School of Business,Dr. Khalid Khan,Management Department,Tue-Thu,2:00 PM – 3:00 PM,H-323
Fall 2026,School of Business,Dr. Khalid Khan,Management Department,Sun,1:00 PM – 2:00 PM,H-323
Fall 2026,School of Business,Dr. Michel Zaitouni,Management Department,Mon-Tue-Wed-Thu,11:00 AM – 12:00 PM,H-324
Fall 2026,School of Business,Dr. Petya Koleva,Management Department,Thu,10:00 AM – 11:00 AM,H-301 E
Fall 2026,School of Business,Dr. Petya Koleva,Management Department,Sat,10:00 AM – 12:00 PM,H-301 E
Fall 2026,School of Business,Dr. Tariq Bhatti,Management Department,Tue-Thu,1:00 PM- 3:00 PM,H-318
Fall 2026,School of Business,Dr. Tariq Bhatti,Management Department,Sun,1:30 PM – 2:30 PM,H-318
Fall 2026,School of Business,Dr. Pranav Kumar,Management Department,Mon-Wed,2:30 PM – 3:00 PM,H-314
Fall 2026,School of Business,Dr. Pranav Kumar,Management Department,Tue-Thu,12:00 PM – 1:30 PM,H-314
Fall 2026,School of Business,Dr. Jalal Hanaysha,Management Department,Mon-Wed,10:00 AM – 12:00 PM,H-320
Fall 2026,School of Business,Dr. Jalal Hanaysha,Management Department,Tue-Thu,9:00 AM – 10:00 AM,H-320
Fall 2026,School of Business,Dr. Ayesha Ubaid,Management Department,Tue-Thu,12:00 PM – 1:00 PM,H-319
Fall 2026,School of Business,Dr. Ayesha Ubaid,Management Department,Wed,2:00 PM – 3:00 PM,H-319
Fall 2026,School of Business,Dr. Ayesha Ubaid,Management Department,Sat,2:00 PM – 3:00 PM,H-319
Fall 2026,School of Business,Dr. Anurag Guglani,Management Department,Tue-Thu,11:45 AM – 12:45 PM,H-330
Fall 2026,School of Business,Dr. Kris Wagner,Management Department,Mon-Wed,12:00 PM – 2:00 PM,H-332
Fall 2026,School of Business,Dr. Abdullah Ismail,Management Department,Mon-Wed,11:30 PM – 12:30 PM,H-327
Fall 2026,School of Business,Dr. Abdullah Ismail,Management Department,Sat,2:00 PM – 3:00 PM,H-327
Fall 2026,School of Business,Dr. Mohammed Azzam,Accounting and Finance Department,Mon-Wed,11:00 AM – 12:00 PM,H-315
Fall 2026,School of Business,Dr. Mohammed Azzam,Accounting and Finance Department,Tue-Thu,11:30 AM – 1:30 PM,H-315
Fall 2026,School of Business,Dr. Hussain Muhammed,Accounting and Finance Department,Tue-Thu,10:00 AM – 12:00 PM,H-322
Fall 2026,School of Business,Dr. Hussain Muhammed,Accounting and Finance Department,Sat,11:30 AM – 12:30 PM,H-322
Fall 2026,School of Business,Dr. Hussain Muhammed,Accounting and Finance Department,Sun,1:30 PM – 2:30 PM,H-322
Fall 2026,School of Business,Dr. Ibrahim Khatatbeh,Accounting and Finance Department,Mon-Wed,11:30 AM – 1:30 PM,H-316
Fall 2026,School of Business,Dr. Ibrahim Khatatbeh,Accounting and Finance Department,Sat,12:00 PM – 2:00 PM,H-316
Fall 2026,School of Business,Dr. Farah Alasaf,Accounting and Finance Department,Tue,12:30 PM – 2:30 PM,H-317
Fall 2026,School of Business,Dr. Farah Alasaf,Accounting and Finance Department,Wed,3:00 PM – 5:00 PM,H-317
Fall 2026,School of Business,Dr. Mukdad Ibrahim,Accounting and Finance Department,Mon-Wed,12:00 PM – 1:00 PM,H-331
Fall 2026,School of Business,Dr. Riya Bhattacharya,Accounting and Finance Department,Mon-Wed,1:00 PM – 3:00 PM,H-327
Fall 2026,School of Engineering and Computing,Dr. Archer Heindric,Architecture & Civil Engineering Department,Mon-Tue-Wed-Thu-Fri,12:00 pm – 1:15 pm,G - 348
Fall 2026,School of Engineering and Computing,Prof. Roz-Ud-Din Nassar,Architecture & Civil Engineering Department,Tue,10:30 am – 12:00 pm,G - 310
Fall 2026,School of Engineering and Computing,Prof. Roz-Ud-Din Nassar,Architecture & Civil Engineering Department,Thu,"10:30 am – 12:00 pm, 1:30 pm – 2:30 pm",G - 310
Fall 2026,School of Engineering and Computing,Dr. Fayez Moutassem,Architecture & Civil Engineering Department,Mon & Wed,12:00 pm – 2:30 pm,G – 353
Fall 2026,School of Engineering and Computing,Dr. Nael Alsaleh,Architecture & Civil Engineering Department,Mon & Wed,11:00 am – 1:00 pm,G – 304
Fall 2026,School of Engineering and Computing,Dr. Liudmila Cazacova,Architecture & Civil Engineering Department,Tue & Thu,10:20 am – 12:20 pm,G – 351
Fall 2026,School of Engineering and Computing,Dr. Chen-Yu Chiu,Architecture & Civil Engineering Department,Mon-Tue-Wed-Thu,11:00 am – 12:00 pm,G – 349
Fall 2026,School of Engineering and Computing,Eng. Abeer Abu Raed,Architecture & Civil Engineering Department,Tue & Thu,11:30 am – 1:00 pm,G – 350
Fall 2026,School of Engineering and Computing,Dr. Lubna Alawneh,Architecture & Civil Engineering Department,Mon & Wed,12:00 pm – 1:30 pm,G - 352
Fall 2026,School of Engineering and Computing,Dr. Lubna Alawneh,Architecture & Civil Engineering Department,Tue & Thu,8:00 am – 9:00 am,G - 352
Fall 2026,School of Engineering and Computing,Dr. Ghaith Tish,Architecture & Civil Engineering Department,Mon-Wed-Fri,9:00 am – 10:00 am,G - 313
Fall 2026,School of Engineering and Computing,Ms. Inshirah Shublaq,Architecture & Civil Engineering Department,Mon & Wed,11:05 am – 1:05 pm,G - 309
Fall 2026,School of Engineering and Computing,Ms. Inshirah Shublaq,Architecture & Civil Engineering Department,Tue,11:00 am – 12:00 pm,G - 309
Fall 2026,School of Engineering and Computing,Dr. Uday Kumar,Chemical & Petroleum Engineering Department,Mon-Tue-Wed-Thu,10:30 am – 11:30 am,G – 321
Fall 2026,School of Engineering and Computing,Dr. Uday Kumar,Chemical & Petroleum Engineering Department,Mon-Tue-Wed-Thu,1:30 pm – 3:00 pm,G – 321
Fall 2026,School of Engineering and Computing,Dr. Sara Faiz,Chemical & Petroleum Engineering Department,Mon & Wed,12:00 pm – 1:00 pm,G – 323
Fall 2026,School of Engineering and Computing,Dr. Sara Faiz,Chemical & Petroleum Engineering Department,Tue,"10:30 am – 11:30 am, 1:30 pm – 2:30 pm",G – 323
Fall 2026,School of Engineering and Computing,Dr. Sara Faiz,Chemical & Petroleum Engineering Department,Thu,"10:30 am – 11:30 am, 3:00 pm – 4:00 pm",G – 323
Fall 2026,School of Engineering and Computing,Dr. Nageswara Lakkimsetty,Chemical & Petroleum Engineering Department,Mon & Wed,"10:30 am – 11:45 am, 2:00 pm – 4:00 pm",G – 312
Fall 2026,School of Engineering and Computing,Dr. Nageswara Lakkimsetty,Chemical & Petroleum Engineering Department,Tue & Thu,2:30 pm – 3:30 pm,G – 312
Fall 2026,School of Engineering and Computing,Dr. Abo Taleb Al-Hameedi,Chemical & Petroleum Engineering Department,Mon & Wed,1:30 pm – 2:45 pm,G – 303
Fall 2026,School of Engineering and Computing,Dr. Abo Taleb Al-Hameedi,Chemical & Petroleum Engineering Department,Tue & Thu,3:00 pm – 4:15 pm,G – 303
Fall 2026,School of Engineering and Computing,Dr. Ali Alnoman,Computer Science & Engineering Department,Mon & Thu,12:00 pm – 3:00 pm,G – 320
Fall 2026,School of Engineering and Computing,Dr. Khouloud Salameh,Computer Science & Engineering Department,Mon & Wed,9:00 am – 11:30 am,G – 326B
Fall 2026,School of Engineering and Computing,Prof. Mohammed Awad,Computer Science & Engineering Department,Mon & Wed,9:00 am – 10:30 am,K – 347
Fall 2026,School of Engineering and Computing,Prof. Mohammed Omari,Computer Science & Engineering Department,Mon & Wed,9:30 am – 10:30 am,G – 343
Fall 2026,School of Engineering and Computing,Prof. Mohammed Omari,Computer Science & Engineering Department,Mon & Wed,11:45 am – 12:45 pm,G – 343
Fall 2026,School of Engineering and Computing,Prof. Arfan Ghani,Computer Science & Engineering Department,Mon & Wed,9:30 am – 10:30 am,G – 314
Fall 2026,School of Engineering and Computing,Prof. Arfan Ghani,Computer Science & Engineering Department,Tue,2:00 pm – 3:00 pm,G – 314
Fall 2026,School of Engineering and Computing,Dr. Khaled Omar Balawafi,Computer Science & Engineering Department,Mon & Wed,2:00 pm – 4:00 pm,G – 316
Fall 2026,School of Engineering and Computing,Dr. Khaled Omar Balawafi,Computer Science & Engineering Department,Tue & Thu,3:00 pm – 4:00 pm,G – 316
Fall 2026,School of Engineering and Computing,Dr. Lobna Nassar,Computer Science & Engineering Department,Mon,5:45 pm – 6:40 pm,G – 347
Fall 2026,School of Engineering and Computing,Dr. Lobna Nassar,Computer Science & Engineering Department,Tue,"2:00 pm – 3:00 pm, 5:30 pm – 6:45 pm",G – 347
Fall 2026,School of Engineering and Computing,Eng. Umar Adeel,Computer Science & Engineering Department,Mon,11:30 am – 12:00 pm,G – 335
Fall 2026,School of Engineering and Computing,Eng. Umar Adeel,Computer Science & Engineering Department,Tue & Thu,9:00 am – 10:30 am,G – 335
Fall 2026,School of Engineering and Computing,Eng. Umar Adeel,Computer Science & Engineering Department,Fri,"1:30 pm – 2:00 pm, 4:30 pm – 5:00 pm",G – 335
Fall 2026,School of Engineering and Computing,Eng. Abdul Rahman Al Muaitah,Computer Science & Engineering Department,Mon-Tue-Thu,2:00 pm – 3:00 pm,AI Lab – Bldg. G Ground floor
Fall 2026,School of Engineering and Computing,Dr. Zubaidah Al Hazza,Computer Science & Engineering Department,Tue & Thu,"9:00 am – 10:00 am, 12:00 pm – 1:00 pm",G - 338
Fall 2026,School of Engineering and Computing,Dr. Ali Al Ataby,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon-Tue-Wed-Thu,10:30 am – 1:15 pm,G – 322
Fall 2026,School of Engineering and Computing,Dr. Ali Al Ataby,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon-Tue-Wed-Thu,3:00 pm – 4:15 pm,G – 322
Fall 2026,School of Engineering and Computing,Prof. Ahmad Sakhrieh,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon,1:30 pm – 2:45 pm,G – 318
Fall 2026,School of Engineering and Computing,Prof. Ahmad Sakhrieh,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue & Sat,10:30 am – 11:45 am,G – 318
Fall 2026,School of Engineering and Computing,Dr. Khaled Hossin,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon-Tue-Wed,10:30 am – 11:45 am,G – 339
Fall 2026,School of Engineering and Computing,Dr. Khaled Hossin,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon,1:30 pm – 2:45 pm,G – 339
Fall 2026,School of Engineering and Computing,Prof. Muataz Al Hazza,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon-Tue-Wed,10:30 am – 12:00 pm,G – 346
Fall 2026,School of Engineering and Computing,Prof. Muataz Al Hazza,"Mechanical, Electrical & Intelligent Systems Engineering Department",Sat,"8:00 am – 9:00 am, 2:30 pm - 3:30 pm",G – 346
Fall 2026,School of Engineering and Computing,Dr. Maissa Farhat,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Wed,1:15 pm – 2:15 pm,G – 341
Fall 2026,School of Engineering and Computing,Dr. Maissa Farhat,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue & Thu,9:00 am – 10:00 am,G – 341
Fall 2026,School of Engineering and Computing,Dr. Basem Yousef,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon,11:00 am – 12:00 pm,G – 307
Fall 2026,School of Engineering and Computing,Dr. Basem Yousef,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue & Thu,1:30 pm – 2:30 pm,G – 307
Fall 2026,School of Engineering and Computing,Dr. Beza Getu,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Wed,10:30 am – 11:45 am,G – 334
Fall 2026,School of Engineering and Computing,Dr. Beza Getu,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue & Thu,1:30 pm – 2:45 pm,G – 334
Fall 2026,School of Engineering and Computing,Dr. Mohammed Alnahhal,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Wed,1:30 pm – 2:45 pm,G – 308
Fall 2026,School of Engineering and Computing,Dr. Mohammed Alnahhal,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue,11:30 am – 1:00 pm,G – 308
Fall 2026,School of Engineering and Computing,Dr. Mohammed Alnahhal,"Mechanical, Electrical & Intelligent Systems Engineering Department",Sat,11:30 am – 12:00 pm,G – 308
Fall 2026,School of Engineering and Computing,Dr. Mohamad Kharseh,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Wed,11:00 am – 12:00 pm,G - 342
Fall 2026,School of Engineering and Computing,Dr. Mohamad Kharseh,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Fri,3:00 pm – 4:00 pm,G - 342
Fall 2026,School of Engineering and Computing,Dr. Mohamad Kharseh,"Mechanical, Electrical & Intelligent Systems Engineering Department",Sat,2:00 pm – 4:00 pm,G - 342
Fall 2026,School of Engineering and Computing,Dr. Hussain Attia,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon & Wed,1:00 pm – 2:30 pm,G - 306
Fall 2026,School of Engineering and Computing,Dr. Rayane Tchantchane,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue,10:00 am – 12:00 pm,G - 336
Fall 2026,School of Engineering and Computing,Dr. Rayane Tchantchane,"Mechanical, Electrical & Intelligent Systems Engineering Department",Wed,1:30 pm – 5:00 pm,G - 336
Fall 2026,School of Engineering and Computing,Eng. Mohamad Zaid,"Mechanical, Electrical & Intelligent Systems Engineering Department",Mon-Tue-Wed-Thu,12:00 pm – 1:15 pm,G - 337
Fall 2026,School of Engineering and Computing,Eng. Mohamad Zaid,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue & Thu,1:30 pm – 2:45 pm,G - 337
Fall 2026,School of Engineering and Computing,Dr. Maram Helmy,"Mechanical, Electrical & Intelligent Systems Engineering Department",Tue,3:00 pm – 5:30 pm,G - 344
Fall 2026,School of Engineering and Computing,Dr. Maram Helmy,"Mechanical, Electrical & Intelligent Systems Engineering Department",Wed,1:30 pm – 3:00 pm,G - 344
Fall 2026,School of Arts & Sciences,Prof. Rachel Matar,,Tue,2:00 pm – 3:00 pm,K-342
Fall 2026,School of Arts & Sciences,Dr. Kutbettin Kilic,,Mon – Wed,10:00 am – 11:00 am,K – 341
Fall 2026,School of Arts & Sciences,Dr. Kutbettin Kilic,,Tue - Thu,1:30 pm – 2:30 pm,K – 341
Fall 2026,School of Arts & Sciences,Dr. Rawad Hodeify,Department of Biotechnology,Mon - Tue,10:30 am – 11:20 am,K – 310
Fall 2026,School of Arts & Sciences,Dr. Rawad Hodeify,Department of Biotechnology,Mon,1:30 pm – 2:45 pm,K – 310
Fall 2026,School of Arts & Sciences,Prof. Irshad Ahmad,Department of Biotechnology,Mon - Tue,1:00 pm – 2:00 pm,K – 315
Fall 2026,School of Arts & Sciences,Prof. Irshad Ahmad,Department of Biotechnology,Wed - Thu,1:00 pm – 2:00 pm,K – 315
Fall 2026,School of Arts & Sciences,Dr. Cijo Vazhappilly,Department of Biotechnology,Mon - Wed,02:00 pm - 3:00 pm,K – 317
Fall 2026,School of Arts & Sciences,Dr. Cijo Vazhappilly,Department of Biotechnology,Tue - Thu,02:00 pm - 3:00 pm,K – 317
Fall 2026,School of Arts & Sciences,Dr. Cijo Vazhappilly,Department of Biotechnology,Fri,10.30 am - 12.30 pm,K – 317
Fall 2026,School of Arts & Sciences,Prof. Shagufta Waseem,Department of Biotechnology,Mon – Tue - Wed,11:00 am – 12:00,K – 321
Fall 2026,School of Arts & Sciences,Prof. Shagufta Waseem,Department of Biotechnology,Tue - Student success hour,1:00 pm – 2:00 pm,K – 321
Fall 2026,School of Arts & Sciences,Prof. Shagufta Waseem,Department of Biotechnology,Thu,1:00 pm – 2:00 pm,K – 321
Fall 2026,School of Arts & Sciences,Dr. Rinku Thomas,Department of Biotechnology,Mon,9:00 am – 11:30 am,K – 329
Fall 2026,School of Arts & Sciences,Dr. Rinku Thomas,Department of Biotechnology,Tue,10:30am – 12 noon,K – 329
Fall 2026,School of Arts & Sciences,Dr. Rinku Thomas,Department of Biotechnology,Thu,10:30am – 12 noon,K – 329
Fall 2026,School of Arts & Sciences,Dr. Rinku Thomas,Department of Biotechnology,Thu,1:30pm – 4:00pm,K – 329
Fall 2026,School of Arts & Sciences,Dr. Busher Idris,Department of Biotechnology,Tue,11:00 am – 12:00 pm,K – 314
Fall 2026,School of Arts & Sciences,Dr. Busher Idris,Department of Biotechnology,Tue,12:00 pm – 01:00 pm,K – 314
Fall 2026,School of Arts & Sciences,Dr. Busher Idris,Department of Biotechnology,Tue,02:00 pm – 03:00 pm,K – 314
Fall 2026,School of Arts & Sciences,Dr. Busher Idris,Department of Biotechnology,Tue,03:00 pm – 04:00 pm,K – 314
Fall 2026,School of Arts & Sciences,Dr. Busher Idris,Department of Biotechnology,Thu,11:30 am – 12:30 pm,K – 314
Fall 2026,School of Arts & Sciences,Dr. Asha Cyril,Department of Biotechnology,Tue,11:00 AM – 12:00 PM,K – 333
Fall 2026,School of Arts & Sciences,Dr. Asha Cyril,Department of Biotechnology,Wed,1:00 PM- 4:00 PM,K – 333
Fall 2026,School of Arts & Sciences,Dr. Asha Cyril,Department of Biotechnology,Thu,11:00 AM – 12:00PM,K – 333
Fall 2026,School of Arts & Sciences,Mr. John Marton,Department of Biotechnology,Mon - Tue,08:00 am – 09:00 am,K – 339
Fall 2026,School of Arts & Sciences,Mr. John Marton,Department of Biotechnology,Wed – Thu,08:00 am – 09:00 am,K – 339
Fall 2026,School of Arts & Sciences,Dr. Saleha Al Mardeai,Department of Biotechnology,Tue - Thu,3:00 pm – 4:00 pm,K – 338
Fall 2026,School of Arts & Sciences,Dr. Wasan Mahmood,Department of Biotechnology,Mon,12:00-1:00 PM,K – 308
Fall 2026,School of Arts & Sciences,Dr. Wasan Mahmood,Department of Biotechnology,Mon,1:00-2:00 PM,K – 308
Fall 2026,School of Arts & Sciences,Dr. Wasan Mahmood,Department of Biotechnology,Tue,1:00-2:00 PM,K – 308
Fall 2026,School of Arts & Sciences,Dr. Wasan Mahmood,Department of Biotechnology,Tue,2:00-3:00 PM,K – 308
Fall 2026,School of Arts & Sciences,Dr. Muhammad Arshad,Department of Biotechnology,Mon,11:00 AM – 2:00 PM,K – 326
Fall 2026,School of Arts & Sciences,Dr. Muhammad Arshad,Department of Biotechnology,Thu,9:30 AM – 10:30 AM,K – 326
Fall 2026,School of Arts & Sciences,Dr. Serkan Şavk,Department of Humanities & Social Sciences,Mon –Wed,2:00 PM -3:30 PM,K – 305
Fall 2026,School of Arts & Sciences,Dr. Sabir Haque,Department of Humanities & Social Sciences,Tue,10:30 am - 1:30 pm,K – 320
Fall 2026,School of Arts & Sciences,Dr. Sabir Haque,Department of Humanities & Social Sciences,Thu,10:30 am - 12:30 pm,K – 320
Fall 2026,School of Arts & Sciences,Dr. Paul Doku,Department of Humanities & Social Sciences,Mon,1:00pm – 4:00pm,K – 336
Fall 2026,School of Arts & Sciences,Dr. Paul Doku,Department of Humanities & Social Sciences,Wed,11:00am – 12:30pm,K – 336
Fall 2026,School of Arts & Sciences,Dr. Lawrence Meda,Department of Humanities & Social Sciences,Mon – Tue,11:00 am – 1pm,K – 306
Fall 2026,School of Arts & Sciences,Dr. Lawrence Meda,Department of Humanities & Social Sciences,Saturday,5:30 pm – 7:30 pm,K – 306
Fall 2026,School of Arts & Sciences,Dr. Irmawan Rahyadi,Department of Humanities & Social Sciences,Tue,1:00 pm – 3:00 pm,K – 335
Fall 2026,School of Arts & Sciences,Dr. Irmawan Rahyadi,Department of Humanities & Social Sciences,Thu,1:00 pm – 3:00 pm,K – 335
Fall 2026,School of Arts & Sciences,Dr. Nahla Moussa,Department of Humanities & Social Sciences,Tue–Thu,1:00 pm – 3:00 pm,K – 322
Fall 2026,School of Arts & Sciences,Dr. Nahla Moussa,Department of Humanities & Social Sciences,Saturday,2:30 pm – 3:30 pm,K – 322
Fall 2026,School of Arts & Sciences,Dr. Dina Antar,Department of Humanities & Social Sciences,Tue - Thu,3:00 pm – 04:30 pm,K – 331
Fall 2026,School of Arts & Sciences,Dr. Dina Antar,Department of Humanities & Social Sciences,Mon,12:00 pm – 1:00 pm,K – 331
Fall 2026,School of Arts & Sciences,Dr. Shadi Al Shidrawi,Department of Humanities & Social Sciences,Mon – Wed,9:00 am – 10:15 am,K – 328
Fall 2026,School of Arts & Sciences,Dr. Shadi Al Shidrawi,Department of Humanities & Social Sciences,Tuesday and Thursday (AWC Bldg. D),12.00-1.00 p.m.,K – 328
Fall 2026,School of Arts & Sciences,Dr. Shadi Al Shidrawi,Department of Humanities & Social Sciences,Fri,9:00 – 1:00 pm,K – 328
Fall 2026,School of Arts & Sciences,Dr. Neil Howard Johnson,Department of Humanities & Social Sciences,Mon – Wed,9:00 am – 10:00 am,K – 330
Fall 2026,School of Arts & Sciences,Dr. Neil Howard Johnson,Department of Humanities & Social Sciences,Monday -,2:00 pm - 3:00 pm,K – 330
Fall 2026,School of Arts & Sciences,Dr. Neil Howard Johnson,Department of Humanities & Social Sciences,Thursday,3:00 pm – 4:00 pm,K – 330
Fall 2026,School of Arts & Sciences,Dr. Neil Howard Johnson,Department of Humanities & Social Sciences,Friday,9:00 am-10:00am,K – 330
Fall 2026,School of Arts & Sciences,Ms. Gulbahor Amirova,Department of Humanities & Social Sciences,Mon – Wed,12:00 pm – 1:00 pm,K – 323
Fall 2026,School of Arts & Sciences,Ms. Gulbahor Amirova,Department of Humanities & Social Sciences,Tue – Thu,9:00 am – 10:30 am,K – 323
Fall 2026,School of Arts & Sciences,Ms. Kate Moore,Department of Humanities & Social Sciences,Mon,8:00 am – 9:00 am,K – 337
Fall 2026,School of Arts & Sciences,Ms. Kate Moore,Department of Humanities & Social Sciences,Mon- Tue- Wed,1:15 pm – 2:15 pm,K – 337
Fall 2026,School of Arts & Sciences,Ms. Kate Moore,Department of Humanities & Social Sciences,Thu,1:15 pm – 3:00 pm,K – 337
Fall 2026,School of Arts & Sciences,Ms. Norma Daniela Godoy,Department of Humanities & Social Sciences,Mon – Wed,9:30 am – 10:30 am,K – 332
Fall 2026,School of Arts & Sciences,Ms. Norma Daniela Godoy,Department of Humanities & Social Sciences,Tue - Thu,4:00 pm – 5:00 pm,K – 332
Fall 2026,School of Arts & Sciences,Dr. Esma Erdogan Kilic,Department of Humanities & Social Sciences,Mon - Wed,9:00 am – 10:00 am,K – 309
Fall 2026,School of Arts & Sciences,Dr. Esma Erdogan Kilic,Department of Humanities & Social Sciences,Mon - Wed,2:50 pm – 3:50 pm,K – 309
Fall 2026,School of Arts & Sciences,Mr. Kamel Rabi,Department of Humanities & Social Sciences,Tue,5:45 pm – 6:45 pm,K – 326
Fall 2026,School of Arts & Sciences,Mr. Kamel Rabi,Department of Humanities & Social Sciences,Thu,5:45 pm – 6:45 pm,K – 326
Fall 2026,School of Arts & Sciences,Prof. Hamid Berriche,Department of Mathematics & Physics,Tue,9:00 am – 10:00 am,K – 311
Fall 2026,School of Arts & Sciences,Prof. Hamid Berriche,Department of Mathematics & Physics,Wed,12:00-1:00 pm,K – 311
Fall 2026,School of Arts & Sciences,Prof. Hamid Berriche,Department of Mathematics & Physics,Thu,9:00 am – 10:00 am,K – 311
Fall 2026,School of Arts & Sciences,Prof. Suleyman Ulusoy,Department of Mathematics & Physics,Mon - Wed,12:00-1:30 pm,K – 319
Fall 2026,School of Arts & Sciences,Prof. Suleyman Ulusoy,Department of Mathematics & Physics,Tue - Thu,1:00-1:30 pm,K – 319
Fall 2026,School of Arts & Sciences,Prof. Katta Ramesh,Department of Mathematics & Physics,Mon - Wed,10:30 am – 12:30 pm,K – 327
Fall 2026,School of Arts & Sciences,Dr. Muhammad Shafiq Ahmed,Department of Mathematics & Physics,Mon – Tue,9:00 am – 10:15 am,K – 324
Fall 2026,School of Arts & Sciences,Dr. Muhammad Shafiq Ahmed,Department of Mathematics & Physics,Wed- Thu,9:00 am – 10:15 am,K – 324
Fall 2026,School of Arts & Sciences,Dr. Abdulkarim Ibrahim,Department of Mathematics & Physics,Mon – Wed,3:00 pm - 4:00pm,K – 325
Fall 2026,School of Arts & Sciences,Dr. Abdulkarim Ibrahim,Department of Mathematics & Physics,Tue - Thu,10:45 am -11:45 am,K – 325
Fall 2026,School of Arts & Sciences,Dr. Tariq Al Zoubi,Department of Mathematics & Physics,Mon – Tue,9:15 am – 10:15 am,K – 313
Fall 2026,School of Arts & Sciences,Dr. Tariq Al Zoubi,Department of Mathematics & Physics,Wed - Thu,9:15 am – 10:15 am,K – 313
Fall 2026,School of Arts & Sciences,Dr. Mohamad Mawass,Department of Mathematics & Physics,Mon - Wed,9:30 am – 12 pm,K – 316
Fall 2026,School of Arts & Sciences,Mr. Ibrahim Awadallah,Department of Mathematics & Physics,Tue – Thu,10:30 am – 12:00 pm,K – 334
Fall 2026,School of Arts & Sciences,Mr. Ibrahim Awadallah,Department of Mathematics & Physics,Mon – Wed,12:00 pm – 1:30 pm,K – 334
Fall 2026,School of Arts & Sciences,Mr. Emad Shadid,Department of Mathematics & Physics,Tue,2:00 pm – 3:00 pm,K – 326
Fall 2026,School of Arts & Sciences,Mr. Emad Shadid,Department of Mathematics & Physics,Thu,2:00 pm – 3:00 pm,K – 326
Fall 2026,School of Arts & Sciences,Ms. Mariam El Sayed,Department of Mathematics & Physics,Mon,1:00 pm – 3:00 pm,K – 308
`;
