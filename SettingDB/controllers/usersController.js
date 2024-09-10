const db = require("../db/queries");

async function getUsers (req,res) {
    let usernames;
    if (req.query.hasOwnProperty('search')) {
        usernames = await db.searchUsername(req.query.search.trim());
    } else {
        usernames = await db.getAllUsernames();
    }
    
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

function addUserForm (req,res) {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/new" method="POST">
        <input type="text" name="username" id="username">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`)
}

async function addUser (req,res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function deleteAllUsers (req,res){
    await db.truncateTable();
    res.redirect("/");
}

module.exports = {
    getUsers,
    addUserForm,
    addUser,
    deleteAllUsers,
}