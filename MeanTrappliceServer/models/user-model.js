var db = require("../db");
let model = {
    updateUser: (input, cb) => {
        let data = {
            username: input.username,
            password: input.password,
            first_name: input.first_name,
            last_name: input.last_name,
            authorization: input.authorization,
            rank: input.rank,
            is_active: input.is_active,
            id_rank: input.id_rank
        }
        return db.query("UPDATE users SET ? WHERE id_rank=?", [data, input.id_rank], cb)
    },
    deleteUser: (id_rank, cb) => {
        return db.query("DELETE FROM users WHERE id_rank=?", [id_rank], cb);
    }
}

module.exports = model;