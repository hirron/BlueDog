"use strict";
var EditProject = /** @class */ (function () {
    function EditProject(userName, pwd) {
        this.userName = userName;
        this.pwd = pwd;
    }
    return EditProject;
}());
function Permission(user) {
    if (user.pwd == database.userPwd)
        return true;
    else
        return false;
}
var user = new User("Admin", "1234567890");
document.body.innerHTML = Permission(user);
