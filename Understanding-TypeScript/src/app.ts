class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, private readonly name: string) {
    }

    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('d1', 'Accounting');
console.log(accounting);
accounting.describe();

accounting.addEmployee('taro');
accounting.addEmployee('jiro');
accounting.printEmployeeInformation();