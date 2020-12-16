require("dotenv").config();

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const getTotalRecords = () => {
    sql = "SELECT COUNT(*) FROM book";
    return pool.query(sql)
        .then(result => {
            return {
                msg: "success",
                totRecords: result.rows[0].count
            }
        })
        .catch(err => {
            return {
                msg: `Error: ${err.message}`
            }
        });
};

const importFile = () => {
    if(!req.file || Object.keys(req.file).length === 0) {
        message = "Error: Import file not uploaded";
        return message;
    };

    const buffer = req.file.buffer; 
    const lines = buffer.toString().split(/\r?\n/);

    lines.forEach(line => {
         product = line.split(",");
         const sql = "INSERT INTO book(book_id, title, total_pages, rating, isbn, published_date) VALUES ($1, $2, $3, $4, $5, $6)";
         return pool.query(sql, product, (err, result) => {
             if (err) {
                 console.log(`Insert Error.  Error message: ${err.message}`);
             } else {
                 console.log(`Inserted successfully`);
                 result: sql
             }
        });
    });
}

module.exports.getTotalRecords = getTotalRecords;
module.exports.importFile = importFile;