class User {
  constructor(userID, username, birthdate, age, email, pwd, valid) {
      this.userID = userID;
      this.username = username;
      this.birthdate = birthdate;
      this.age = age;
      this.email = email;
      this.pwd = pwd;
      this.valid = valid;
  }
}

module.exports = User;
