"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var users = [
            {
                firstname: "John",
                lastname: "Smith",
                email: "johns@thentia.com",
                roles: "Owner"
            },
            {
                firstname: "Monte",
                lastname: "Levine",
                email: "MonteJLevine@rhyta.com",
                role: "Admin"
            },
            {
                firstname: "Beth",
                lastname: "Ericksen",
                email: "BethWEricksen@rhyta.com",
                roles: "User"
            },
            {
                firstname: "William",
                lastname: "Powell",
                email: "WilliamVPowell@teleworm.us",
                roles: "User"
            },
            {
                firstname: "Craig",
                lastname: "Thomas",
                email: "CraigSThomas@rhyta.com",
                roles: "User"
            }
        ];
        return { users: users };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=fake.service.js.map