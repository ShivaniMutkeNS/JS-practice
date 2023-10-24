function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

/*

We have learned that how
this keyword behaves differently in JavaScript than in other object-oriented languages.
The call, bind and apply methods can be used to set the this keyword independent of how a function is called.

The bind method creates a copy of the function and sets
the this keyword, while the call and apply methods sets the this keyword and calls the function immediately.
* */