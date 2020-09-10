var db = require("../db");
var dateFormat = require('dateformat')

let model = {
    getProducts: (offset, limit, cb) => {
        return db.query("SELECT * FROM products LIMIT ?, ?", [+offset, +limit], cb)
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
    //get report date
    getProductDate: (cb) => {
        return db.query("SELECT * FROM products", cb)
    },
    getUsers: (id, cb) => {
        return db.query("SELECT * FROM users WHERE id=?", [id], cb)
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
            created_at: currentDate
        }
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