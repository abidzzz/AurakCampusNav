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
`;
