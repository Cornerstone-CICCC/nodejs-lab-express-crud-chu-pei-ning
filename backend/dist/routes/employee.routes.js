"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const employeeRouter = (0, express_1.Router)();
const employees = [
    {
        id: (0, uuid_1.v4)(),
        firstname: "John",
        lastname: "Smith",
        age: 40,
        isMarried: true
    }, {
        id: (0, uuid_1.v4)(),
        firstname: "Jane",
        lastname: "Doe",
        age: 30,
        isMarried: false
    }
];
//get
employeeRouter.get('/', (req, res) => {
    res.status(200).json(employees);
});
//search
employeeRouter.get('/search', (req, res) => {
    const { firstname } = req.query;
    const foundUsers = employees.filter(employee => employee.firstname.toLowerCase().includes(firstname.toLowerCase()));
    if (foundUsers.length === 0) {
        res.status(404).send("No matching employee!");
        return;
    }
    res.status(200).json(foundUsers);
});
//get by ID
employeeRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const employee = employees.find(employee => employee.id === id);
    if (!employee) {
        res.status(404).send("not found");
        return;
    }
    res.status(200).json(employee);
});
//add
employeeRouter.post("/", (req, res) => {
    const newEmployee = {
        id: (0, uuid_1.v4)(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        isMarried: req.body.isMarried
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});
//update
employeeRouter.put("/:id", (req, res) => {
    var _a, _b;
    const { id } = req.params;
    const foundIndex = employees.findIndex(employee => employee.id === id);
    if (foundIndex === -1) {
        res.status(404).send("not found");
        return;
    }
    const updatedUser = Object.assign(Object.assign({}, employees[foundIndex]), { firstname: (_a = req.body.firstname) !== null && _a !== void 0 ? _a : employees[foundIndex].firstname, lastname: (_b = req.body.lastname) !== null && _b !== void 0 ? _b : employees[foundIndex].lastname });
    employees[foundIndex] = updatedUser;
    res.status(200).json(updatedUser);
});
//delete
employeeRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const foundIndex = employees.findIndex(employee => employee.id === id);
    if (foundIndex === -1) {
        res.status(404).send("not found");
        return;
    }
    employees.splice(foundIndex, 1);
    res.status(200).send("was deleted!");
});
exports.default = employeeRouter;
