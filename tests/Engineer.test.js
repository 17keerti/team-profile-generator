const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
  describe('Initialization', () => {
    describe("github", () => {
      it("can set github username using constructor", () => {
        const github = "17keerti";
        const engineer= new Engineer("Keerti",12,"17keerti@gmail.com", github);
        expect(engineer.github).toEqual(github);
  
      });
    });
    describe("getGithub", () => {
      it("can get github username", () => {
        const github = "17keerti";
        const engineer = new Engineer("Keerti",12,"17keerti@gmail.com", github);
        expect(engineer.getGithub()).toEqual(github);
  
      });
    });
    describe("getRole", () => {
      it("should return string Engineer", () => {
        const role = "Engineer";
        const engineer = new Engineer("Keerti",12,"17keerti@gmail.com", "17keerti");
        expect(engineer.getRole()).toEqual(role);
  
      });
    });
  });
});