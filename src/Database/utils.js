const fs = require("fs");

const saveToDataBase = (DB) => {
    fs.writeFileSync("./db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf8",
    });
}

module.exports = { saveToDataBase };