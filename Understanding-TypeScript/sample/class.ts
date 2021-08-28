abstract class Department {
    static staticValue = 1;
    protected employees: string[] = [];

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

    static createEmployee(name: string) {
        return {name: name};
    }

    abstract hoge(): void;
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    override hoge() {
    }
}


class AccountingDepartment extends Department {
    private lastReport: string | undefined;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }

    set mostRecentReport(value: string) {
        if (value) {
            this.reports.push(value);
        }
        throw new Error('エラー！');
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    override addEmployee(employee: string) {
        if (employee === 'Max') {
            return;
        }

        this.employees.push(employee);
        // super.addEmployee(employee);
    }

    override hoge() {
    }
}


const it = new ITDepartment('d1', ['Max']);
console.log(it);
it.describe();
it.addEmployee('taro');
it.addEmployee('jiro');
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d1', ['Max']);
console.log(accounting.mostRecentReport);
accounting.addReport('Something');
accounting.printReports();
console.log(accounting);
console.log(accounting.mostRecentReport);

// シングルトン
class Hoge {
    private static instance: Hoge;

    private constructor() {
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new Hoge();
    }
}