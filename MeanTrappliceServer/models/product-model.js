var db = require("../db");
var dateFormat = require('dateformat')
const nodemailer = require("nodemailer");

const details = require("../details.json");

let model = {
    getCountMoney: (cb) => {
        return db.query("SELECT COUNT(id) AS total, Report_Amount FROM products GROUP BY Report_Amount", cb);
    },
    getCountSim: (cb) => {
        return db.query("SELECT COUNT(id) AS total, Offense_Number, Offense_Description FROM products GROUP BY Offense_Number", cb);
    },
    getCountProducts: (cb) => {
        return db.query("SELECT COUNT(id) AS total, Rank_first_last_name_officer FROM products GROUP BY Rank_first_last_name_officer", cb);
    },
    //get report date 
    getProductDate: (date1, date2, cb) => {
        return db.query("SELECT * FROM products WHERE Date BETWEEN ? AND ?", [date1, date2], cb)
    },
    /*
    getProducts: (offset, limit, cb) => {
        return db.query("SELECT * FROM products LIMIT ?, ?", [+offset, +limit], cb)
    },
    */
    getProductIdSearch: (idSearch, cb) => {
        return db.query("SELECT * FROM products WHERE ID_Number=?", [idSearch], cb)
    },
    getTotalProducts: (cb) => {
        return db.query("SELECT COUNT(*) AS total FROM products", cb);
    },
    getProduct: (id, cb) => {
        return db.query("SELECT * FROM products WHERE id=?", [id], cb)
    },
    //get all users
    getUsur: (cb) => {
        return db.query("SELECT * FROM users", cb)
    },
    //get report name officer
    getProductName: (params1, cb) => {
        return db.query("SELECT * FROM products WHERE  Rank_first_last_name_officer=?", [params1], cb)
    },

    getUsers: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=?", [id], cb)
    },

    addContact: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            Type_Contact: input.Type_Contact,
            description: input.description,
            Contact_email: input.Contact_email,

            created_at: currentDate
        }
        return db.query("INSERT INTO contact SET ?", [data], cb)
    },
    addProduct: (input, cb) => {

        let currentDate = dateFormat(new Date(), 'yyyy-mm-dd h:MM:ss');

        let data = {
            Whom: input.Whom,
            DrivingLicenseNumber: input.DrivingLicenseNumber,
            ID_Number: input.ID_Number,
            First_Name: input.First_Name,
            Last_Name: input.Last_Name,
            City: input.City,
            Street: input.Street,
            Home_Number: input.Home_Number,
            Phone_Number: input.Phone_Number,
            EMail: input.EMail,
            Plate_Type: input.Plate_Type,
            Car_Manufacturer: input.Car_Manufacturer,
            Car_Type: input.Car_Type,
            Car_Color: input.Car_Color,
            Date: input.Date,
            Hour: input.Hour,
            Offense_Place: input.Offense_Place,
            Offense_Place_Description: input.Offense_Place_Description,
            Offense_Description: input.Offense_Description,
            Points: input.Points,
            Offense_Number: input.Offense_Number,
            Speedometer_Type: input.Speedometer_Type,
            Report_Amount: input.Report_Amount,
            Report_Amount_inWords: input.Report_Amount_inWords,
            First_Witness_ID: input.First_Witness_ID,
            First_Witness_Full_Name: input.First_Witness_Full_Name,
            Second_Witness_ID: input.Second_Witness_ID,
            Second_Witness_Full_Name: input.Second_Witness_Full_Name,
            Full_Description: input.Full_Description,
            Kmh: input.Kmh,
            Distance: input.Distance,
            GivenNotGiven_Continuation_Of_The_Case: input.GivenNotGiven_Continuation_Of_The_Case,
            Citizen_Testimony: input.Citizen_Testimony,
            Citizen_Date_Confirmed: input.Citizen_Date_Confirmed,
            Citizen_Signture: input.Citizen_Signture,
            Last_Date_To_Pay: input.Last_Date_To_Pay,
            Car_Number: input.Car_Number,
            Rank_first_last_name_officer: input.Rank_first_last_name_officer,
            is_active: input.is_active,
            photo_1: input.photo_1,
            photo_2: input.photo_2,
            photo_3: input.photo_3,
            lng: input.lng2,
            lat: input.lat1,
            created_at: currentDate
        }
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: details.email,
                pass: details.password
            }
        });

        let mailOptions = {
            from: 'מייל מערכת "TrAppilice"', // sender address
            to: input.EMail, // list of receivers
            subject: " TrApolice ", // Subject line
            html: `
           
            <h1>שלום <b>${input.First_Name} ${input.Last_Name}</b> - הונפק דוח על שמך! פרטים מצורפים מטה</h1><br>
            <table class="table table-responsive-xl  table-bordered" style="width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
            overflow: auto;
            max-height: 500px;
            background-color: #ebebeb;
            ">
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;
           ">
                 <th  style="border: 1px solid #F5F5F5;">שם פרטי</th>
                 <th  style="border: 1px solid #F5F5F5;">מספר ת.ז</th>
                 <th  style="border: 1px solid #F5F5F5;">מספר רשיון נהיגה</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.First_Name}</td>
                 <td  style="border: 1px solid #000000;">${input.ID_Number}</td>
                 <td  style="border: 1px solid #000000;">${input.DrivingLicenseNumber}</td>
            </tr>
             <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">מספר בית</th>
                 <th  style="border: 1px solid #F5F5F5;">רחוב</th>
                 <th  style="border: 1px solid #F5F5F5;">עיר</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Home_Number}</td>
                 <td  style="border: 1px solid #000000;">${input.Street}</td>
                 <td  style="border: 1px solid #000000;">${input.City}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">תוצר הרכב</th>
                 <th  style="border: 1px solid #F5F5F5;">סוג לוחית</th>
                 <th  style="border: 1px solid #F5F5F5;">איימל</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Car_Manufacturer}</td>
                 <td  style="border: 1px solid #000000;">${input.Plate_Type}</td>
                 <td  style="border: 1px solid #000000;">${input.EMail}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">מקבל הדוח</th>
                 <th  style="border: 1px solid #F5F5F5;">שם משפחה</th>
                 <th  style="border: 1px solid #F5F5F5;">שם נייד</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Whom}</td>
                 <td  style="border: 1px solid #000000;">${input.Last_Name}</td>
                 <td  style="border: 1px solid #000000;">${input.Phone_Number}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">שעה</th>
                 <th  style="border: 1px solid #F5F5F5;">תאריך</th>
                 <th  style="border: 1px solid #F5F5F5;">צבע הרכב</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Hour}</td>
                 <td  style="border: 1px solid #000000;">${input.Date}</td>
                 <td  style="border: 1px solid #000000;">${input.Car_Color}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">נקודות</th>
                 <th  style="border: 1px solid #F5F5F5;">סעיפי עבירה</th>
                 <th  style="border: 1px solid #F5F5F5;">תיאור מיקום העבירה</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Points}</td>
                 <td  style="border: 1px solid #000000;">${input.Offense_Description}</td>
                 <td  style="border: 1px solid #000000;">${input.Offense_Place_Description}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">סכום הקנס במילים</th>
                 <th  style="border: 1px solid #F5F5F5;">סכום הקנס בספרות</th>
                 <th  style="border: 1px solid #F5F5F5;">מכשור עזר בשימוש בדו"ח</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Report_Amount_inWords}</td>
                 <td  style="border: 1px solid #000000;">${input.Report_Amount}</td>
                 <td  style="border: 1px solid #000000;">${input.Speedometer_Type}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">סוג הרכב</th>
                 <th  style="border: 1px solid #F5F5F5;">מקום העבירה</th>
                 <th  style="border: 1px solid #F5F5F5;">סמל סעיף</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Car_Type}</td>
                 <td  style="border: 1px solid #000000;">${input.Offense_Place}</td>
                 <td  style="border: 1px solid #000000;">${input.Offense_Number}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">שם מלא</th>
                 <th  style="border: 1px solid #F5F5F5;"> מ.א או ת.ז עד ראשון</th>
                 <th  style="border: 1px solid #F5F5F5;">תאריך אחרון לתשלום</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.First_Witness_Full_Name}</td>
                 <td  style="border: 1px solid #000000;">${input.First_Witness_ID}</td>
                 <td  style="border: 1px solid #000000;">${input.Last_Date_To_Pay}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">מהירות נסיעה</th>
                 <th  style="border: 1px solid #F5F5F5;"> נסיבות מיוחדות של המקרה</th>
                 <th  style="border: 1px solid #F5F5F5;">שם מלא</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Kmh}</td>
                 <td  style="border: 1px solid #000000;">${input.Full_Description}</td>
                 <td  style="border: 1px solid #000000;">${input.Second_Witness_Full_Name}</td>
            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">

                 <th  style="border: 1px solid #F5F5F5;">מספר רכב</th>
                 <th  style="border: 1px solid #F5F5F5;"> תאריך אישור קבלת הדוח</th>
                 <th  style="border: 1px solid #F5F5F5;">דברי מקבל הדוח</th>

            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;">${input.Car_Number}</td>
                 <td  style="border: 1px solid #000000;">${input.Citizen_Date_Confirmed}</td>
                 <td  style="border: 1px solid #000000;">${input. Citizen_Testimony}</td>

            </tr>
            <tr style="background-color: #303031;
            border: 1px solid #3079b4;
            color: #ebebeb;">
                 <th  style="border: 1px solid #F5F5F5;">מ.א או ת.ז עד שני</th>
                 <th  style="border: 1px solid #F5F5F5;">מרחק במטרים</th>
                 <th  style="border: 1px solid #F5F5F5;">המשך נסיבות המקרה</th>
            </tr>
            <tr style="background-color: #bdbdeb;
            border: 1px solid #3079b4;
            color: #000000;text-align: center;">
                 <td  style="border: 1px solid #000000;" >${input.Second_Witness_ID}</td>
                 <td  style="border: 1px solid #000000;" >${input.Distance}</td>
                 <td  style="border: 1px solid #000000;" >${input. GivenNotGiven_Continuation_Of_The_Case}</td>
            </tr>
        </table>
        <strong style="color:red;text-align:center;">
        **אזרח יקר שים לב לתאריך אחרון לתשלום!**
        </strong>
           `
        };
        let info = transporter.sendMail(mailOptions);
        return db.query("INSERT INTO products SET ?", [data], cb)
    },



    updateProduct: (input, cb) => {
        let data = {
            Whom: input.Whom,
            DrivingLicenseNumber: input.DrivingLicenseNumber,
            ID_Number: input.ID_Number,
            First_Name: input.First_Name,
            is_active: input.is_active,
        }
        return db.query("UPDATE products SET ? WHERE id=?", [data, input.id], cb)
    },
    deleteProduct: (id, cb) => {
        return db.query("DELETE FROM products WHERE id=?", [id], cb);
    }
}

module.exports = model;