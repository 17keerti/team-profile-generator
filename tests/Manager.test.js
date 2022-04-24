const Manager = require("../lib/Manager")

describe("Manager", () => {
  describe('Initialization', () => {
    describe("officeNumber", () => {
      it("can set officeNumber using constructor", () => {
        const officeNumber = 21;
        const manager= new Manager("Keerti",12,"17keerti@gmail.com", officeNumber);
        expect(manager.officeNumber).toEqual(officeNumber);
  
      });
    });
    describe("getofficeNumber", () => {
      it("can get office number", () => {
        const officeNumber = 21;
        const manager= new Manager("Keerti",12,"17keerti@gmail.com", 21);
        expect(manager.getofficeNumber()).toEqual(officeNumber);
  
      });
    });
    describe("getRole", () => {
      it("should return string Manager", () => {
        const role = "Manager";
        const manager= new Manager("Keerti",12,"17keerti@gmail.com", 21);
        expect(manager.getRole()).toEqual(role);
      });
    });
  });
});