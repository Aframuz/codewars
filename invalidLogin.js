function validate(username, password){
   if(password.includes('||') || password.includes('//')){
      return "Wrong username or password!"
   }
   const database = new Database();
   return database.login(username, password);
}