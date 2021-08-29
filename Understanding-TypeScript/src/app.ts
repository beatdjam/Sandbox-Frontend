// 交差型(Intersection Types)
type Admin = {
    name: string;
    privileges: string[]
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: '',
    privileges: ['creat-server'],
    startDate: new Date(),
}

type Combinable = string | boolean;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;