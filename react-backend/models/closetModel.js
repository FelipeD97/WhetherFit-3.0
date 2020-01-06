const db = require("./conn");

class Closet {
    constructor(category, image) {
        this.category = category;
        this.image = image;
    }

    static async getAll() {
        try {
            const response = await db.any(`
            SELECT * FROM clothing
            ORDER BY category;`);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async getHot() {
        try {
            const response = await db.any(
                `
                SELECT picture FROM clothing
                WHERE 'hot' = ANY (temps);
            `);

            return response;

        } catch(err) {
            return err.message;
        }
    }

    static async getWarm() {
        try {
            const response = await db.any(
                `
                SELECT picture FROM clothing
                WHERE 'warm' = ANY (temps);
            `);
            
            return response;

        } catch(err) {
            return err.message;
        }
    }

    static async getCool() {
        try {
            const response = await db.any(
                `
                SELECT picture FROM clothing
                WHERE 'cool' = ANY (temps);
            `);
            
            return response;

        } catch(err) {
            return err.message;
        }
    }

    static async getCold() {
        try {
            const response = await db.any(
                `
                SELECT picture FROM clothing
                WHERE 'cold' = ANY (temps);
            `);
            
            return response;

        } catch(err) {
            return err.message;
        }
    }

    static async getFreezing() {
        try {
            const response = await db.any(
                `
                SELECT picture FROM clothing
                WHERE 'freezing' = ANY (temps);
            `);
            
            return response;

        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Closet;