// Define employee class
class Employee {
    constructor(name, id, email) {
        this.name = name 
        this.id = id
        this.email = email
    }

    getName() {
        if (typeof this.name === "string") {
            return this.name
        } else {
            console.log("That is not a valid name")
        }
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee