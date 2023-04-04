let dbUsers = [
    {
        username: "mael",
        password: "12345",
        name: "el",
        email: "syamaail@utem.edu.my"
    },
    {
        username: "malik",
        password: "23456",
        name: "lik",
        email: "malik@utem.edu.my"
    },
    {
        username: "abu",
        password: "34567",
        name: "bu",
        email: "abu@utem.edu.my"
    }
]

function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(user => user.username == reqUsername)
    if (!matchUser) return "User Not Found!"
    if (matchUser.password == reqPassword)
    {
        return matchUser
    }
    else
    {
        return "Invalid Password"
    }
}

function register(reqUsername, reqPassword, reqName, reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}
    
// try to login
console.log(login("mael", "12345"))
console.log(login("hazim", "adik mael"))

//try to register new ID
register("hazimfahmi", "maeldabest", "Hazim Fahmi", "hazimfahmi@gmail.com")

//show output for new ID registered
console.log(login("hazimfahmi", "maeldabest"))



