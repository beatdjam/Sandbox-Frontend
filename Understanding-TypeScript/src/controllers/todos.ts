import {RequestHandler} from "express";
import {Todo} from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const newTodo = new Todo(Math.random().toString(), req.body.text as string);
    TODOS.push(newTodo);
    res.status(201).json({message: 'created', createdTodo: newTodo});
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({message: 'get', todos: TODOS});
};

export const patchTodo: RequestHandler<{ id: string, text: string }> = (req, res, next) => {
    const id: string = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === id);
    if (index < 0) {
        throw new Error("not found");
    }
    TODOS[index] = new Todo(id, req.body.text);
    res.json({message: 'updated', patchedTodo: TODOS[index]});
};

export const deleteTodo: RequestHandler = (req, res, next) => {
    const id = req.params.id;
    const index = TODOS.findIndex(todo => todo.id === id);
    if (index < 0) {
        throw new Error("not found");
    }
    const deletedTodo = TODOS[index];
    TODOS.splice(index, 1);
    res.json({message: 'deleted', deletedTodo: deletedTodo});
};