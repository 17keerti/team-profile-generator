const Employee = require("../lib/Employee")

describe("Employee", () => {
  describe('Initialization', () => {
    it("can create an employee object", () => {
      const name = "Keerti";
      const id = 12;
      const email = "17keerti@gmail.com";
      const employee = new Employee(name, id, email);
      expect(employee.name).toEqual(name);
      expect(employee.id).toEqual(id);
      expect(employee.email).toEqual(email);
    });
  });
  describe("getName", () => {
    it("can get name", () => {
      const name = "Keerti";
      const employee = new Employee(name);
      expect(employee.getName()).toEqual(name);

    });
  });
  describe("getId", () => {
    it("can get id", () => {
      const id = 12;
      const employee = new Employee("Keerti",id);
      expect(employee.getId()).toEqual(id);

    });
  });
  describe("getEmail", () => {
    it("can get Email", () => {
      const email = "17keerti@gmail.com";
      const employee = new Employee("Keerti",12,email);
      expect(employee.getEmail()).toEqual(email);

    });
  });
  describe("getRole", () => {
    it("should return string Employee", () => {
      const role = "Employee";
      const employee = new Employee("Keerti",12,"17keerti@gmail.com");
      expect(employee.getRole()).toEqual(role);

    });
  });
});