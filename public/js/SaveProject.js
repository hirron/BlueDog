"use strict";
var SaveProject = /** @class */ (function () {
    function SaveProject(userName, pwd) {
        this.userName = userName;
        this.pwd = pwd;
    }
    return SaveProject;
}());
function Permission(user) {
    if (user.pwd == database.userPwd)
        return true;
    else
        return false;
}
var user = new User("Admin", "1234567890");
document.body.innerHTML = Permission(user);
