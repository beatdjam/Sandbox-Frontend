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

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}


class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}


const it = new ITDepartment('d1', ['Max']);
console.log(it);
const accounting = new AccountingDepartment('d1', ['Max']);
accounting.addReport('Something');
accounting.printReports();
console.log(accounting);

it.describe();
it.addEmployee('taro');
it.addEmployee('jiro');
it.printEmployeeInformation();