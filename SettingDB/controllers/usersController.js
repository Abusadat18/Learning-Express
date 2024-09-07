exports.getUsers = (req,res) => {
    console.log("usernames will be logged here - wip")
    res.send("Welcome")
}

exports.addUserForm = (req,res) => {
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

exports.addUser = (req,res) => {
    console.log("username to be saved: ", req.body.username)
    res.send("Added")
}