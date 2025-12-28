const mongoose = require('mongoose');

interface User {
   username: string,
   password: string,
   role:    string[]
}

// const userSchema = mongoose.Schema(
//    User
// );