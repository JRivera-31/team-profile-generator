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
        }
    }

    getId() {
        if (typeof this.id === "number") {
            return this.id
        }
    }

    getEmail()
}

module.exports = Employee