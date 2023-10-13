const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, employees = []){
        super(name, salary, title);
        this.employees = Array.isArray(employees) ? employees : [];
    }

    addEmployee(employee){
        this.employees.push(employee);
        employee.manager = this;
    }

    // private helper function
    _totalSubSalary(){
        let subSalary = 0;
        for (const employee of this.employees){
            if (employee instanceof Manager){
                subSalary += employee._totalSubSalary();
            } else {
            subSalary += employee.salary;
            }
        }
        return subSalary;
    }

    calculateBonus(multiplier){
        const totalSalary = this.salary + this._totalSubSalary();
        return totalSalary * multiplier;

    }
}


module.exports = Manager;

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000
