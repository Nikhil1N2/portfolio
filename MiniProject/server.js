const express = require("express");
const app = express();

app.use(express.static("public"));

const trips = [
    { name: "Goa", description: "Beaches and fun" },
    { name: "Manali", description: "Snow mountains" },
    { name: "Kashmir", description: "Beautiful valley" }
];

app.get("/", (req, res) => {
    let search = req.query.search?.toLowerCase() || "";

    let result = trips.filter(t =>
        t.name.toLowerCase().includes(search)
    );

    res.json(result);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});