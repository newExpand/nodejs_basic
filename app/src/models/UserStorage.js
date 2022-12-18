"use strict";

class UserStorage {
  static #users = {
    id: ["seungmin", "이개발", "이팀장"],
    psword: ["1234", "12345", "123456"],
    names: ["승민", "이개발", "이팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
