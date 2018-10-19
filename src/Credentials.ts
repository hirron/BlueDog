class Credentials {
	userName: string;
	
  constructor(public userName: string, public pwd: string){
  }
}

interface User {
	userName: string;
	pwd: string;
}

function Permission(user : User){
  if(user.pwd == database.userPwd) return true;
  else return false;
}

let user = new User("Admin", "1234567890");

document.body.innerHTML = Permission(user);
