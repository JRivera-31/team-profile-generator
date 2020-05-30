// Get Employee Class
const Employee = require("./Employee")

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        if (typeof this.school === "string") {
            return this.school 
        } else {
            console.log("That is not a valid school")
        }
    }
}

module.exports = Intern