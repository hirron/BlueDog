"use strict";
var Credentials = /** @class */ (function () {
    function Credentials(userName, pwd) {
        this.userName = userName;
        this.pwd = pwd;
    }
    return Credentials;
}());
function Permission(user) {
    if (user.pwd == database.userPwd)
        return true;
    else
        return false;
}
var user = new User("Admin", "1234567890");
document.body.innerHTML = Permission(user);
