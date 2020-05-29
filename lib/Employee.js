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
        if (typeof this.id === "number") {
            return this.id
        } else {
            console.log("That is not a valid id")
        }
    }

    getEmail() {
        if (typeof this.email === "string") {
            return this.email
        } else {
            console.log("That is not a valid email")
        }
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee