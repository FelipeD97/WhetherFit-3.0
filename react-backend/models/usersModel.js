const db = require("./conn"),
    bcrypt = require("bcryptjs");

class User {
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassowrd) {
        return bcrypt.compareSync(this.password, hashedPassowrd);
    }

    async login() {
        try {
            const response = await db.one(
                `SELECT id, first_name, last_name, password
                FROM users WHERE email = $1;`,
                [this.email]);
            
            const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, id, first_name, last_name };
            } else {
                return { isValid };
            }

        } catch(err) {
            return err.message;
        }
    }

    async save() {
        try {
            const response = await db.one(
                `INSERT INTO users
                (first_name, last_name, email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING id;`,
                [this.first_name, this.last_name, this.email, this.password]);
            
                return response;

        } catch(err) {
            return err.message;
        }
    }
}

module.exports = User;