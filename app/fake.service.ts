import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
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
    return {users};
  }
}
