import TodoItem from './TodoItem'
import { useState, ChangeEvent } from 'react'
import { TextField } from '@mui/material';
import './TodoList.css'

type Todo = {
    id: number;
    description: string;
    priority: string;
}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [completedList, setCompletedList] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");

    const addItem = (description: string, priority: string) => {
        const newTodo = { id: todoList.length + 1, description, priority };
        setTodoList([...todoList, newTodo]);
        setNewTodo("")
    }

    const deleteItem = (id: number) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }

    const completeItem = (id: number) => {
        const todoToComplete = todoList.find((todo) => todo.id === id);
        if(todoToComplete) {
            setCompletedList([...completedList, todoToComplete])
        }
        deleteItem(id);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='creation-wizard'>
                <TextField
                    id="wizard-input"
                    variant="standard"
                    label="Describe your Todo"
                    color="primary"
                    value={newTodo}
                    sx={{ input: { color: 'white' } }}
                    onKeyDown={(e) => e.key === "Enter" && addItem(newTodo, "medium")}
                    onChange={handleChange}
                />
            </div>
            <p>Open</p>
            <ul className='p-0'>
                {todoList.map((todo) => (
                    <TodoItem 
                        key={todo.id} {...todo} 
                        onDelete={() => deleteItem(todo.id)} 
                        onComplete={() => completeItem(todo.id)} />
                ))}
            </ul>
            <hr />
            <p>Done</p>
            <ul className='p-0'>
                {completedList.map((todo) => (
                    <TodoItem
                        key={todo.id} {...todo}
                        onDelete={() => deleteItem(todo.id)} 
                        onComplete={() => completeItem(todo.id)}
                        completed={true}
                    />
                ))}
            </ul>
        </div>
    );
}