"use strict";
var ProjectList = /** @class */ (function () {
    function ProjectList(userName, pwd) {
        this.userName = userName;
        this.pwd = pwd;
    }
    return ProjectList;
}());
function Permission(user) {
    if (user.pwd == database.userPwd)
        return true;
    else
        return false;
}
var user = new User("Admin", "1234567890");
document.body.innerHTML = Permission(user);
