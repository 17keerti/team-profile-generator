const Intern = require("../lib/Intern")

describe("Intern", () => {
  describe('Initialization', () => {
    describe("school", () => {
      it("can set school using constructor", () => {
        const school = "sampletest";
        const intern= new Intern("Keerti",12,"17keerti@gmail.com", school);
        expect(intern.school).toEqual(school);
  
      });
    });
    describe("getschool", () => {
      it("can get office number", () => {
        const school = "sampletest";
        const intern= new Intern("Keerti",12,"17keerti@gmail.com", "sampletest");
        expect(intern.getSchool()).toEqual(school);
  
      });
    });
    describe("getRole", () => {
      it("should return string Intern", () => {
        const role = "Intern";
        const intern= new Intern("Keerti",12,"17keerti@gmail.com", "sampletest");
        expect(intern.getRole()).toEqual(role);
      });
    });
  });
});