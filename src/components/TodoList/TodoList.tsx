import TodoItem from './TodoItem'
import { useState, ChangeEvent } from 'react'
import { TextField, MenuItem, Select, FormControl, InputLabel, Tooltip, SelectChangeEvent } from '@mui/material';
import { v7 as uuidv7 } from 'uuid';
import './TodoList.css'
import PriorityIcon from './PriorityIcon';

type Todo = {
    id: string;
    description: string;
    priority: string;
    // TODO: add content as json
}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [completedList, setCompletedList] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");
    const [selectedPrio, setSelectedPrio] = useState("medium")

    const addItem = (description: string, priority: string) => {
        const newTodo = { id: uuidv7(), description, priority };
        setTodoList([...todoList, newTodo]);
        setNewTodo("")
    }

    const deleteItem = (id: string) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }

    const completeItem = (id: string) => {
        const todoToComplete = todoList.find((todo) => todo.id === id);
        if (todoToComplete) {
            setCompletedList([...completedList, todoToComplete])
        }
        deleteItem(id);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleChangeSelect = (e: SelectChangeEvent) => {
        setSelectedPrio(e.target.value as string)
    }

    return (
        <div className='flex flex-col gap-3 w-full'>
            <div className='creation-wizard'>
                <div className="wizard-prio-wrapper">
                    <FormControl fullWidth>
                        <InputLabel id="priority-select-label">Priority</InputLabel>
                        <Select
                            labelId="priority-select-label"
                            id="priority-select"
                            value={selectedPrio}
                            label="Priority"
                            onChange={handleChangeSelect}
                            renderValue={(value) => <PriorityIcon level={value} />}
                        >
                            <MenuItem value="highest">
                                <Tooltip title="Highest" placement="right">
                                    <span><PriorityIcon level="highest" /></span>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem value="high">
                                <Tooltip title="High" placement="right">
                                    <span><PriorityIcon level="high" /></span>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem value="medium">
                                <Tooltip title="Medium" placement="right">
                                    <span><PriorityIcon level="medium" /></span>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem value="low">
                                <Tooltip title="Low" placement="right">
                                    <span><PriorityIcon level="low" /></span>
                                </Tooltip>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="wizard-input-wrapper">
                    <TextField
                        id="wizard-input"
                        variant="standard"
                        label="Describe your Todo"
                        color="primary"
                        value={newTodo}
                        sx={{ input: { color: 'white', border: 'none' }, label: { color: 'white !important' } }}
                        onKeyDown={(e) => e.key === "Enter" && addItem(newTodo, selectedPrio)}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <hr />
            <div className="flex flex-row gap-8 w-full">
                <div className="flex-1">
                    <h2 className="font-bold mb-2">Open</h2>
                    <ul className='p-0'>
                        {todoList.map((todo) => (
                            <TodoItem
                                key={todo.id} {...todo}
                                onDelete={() => deleteItem(todo.id)}
                                onComplete={() => completeItem(todo.id)} />
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <h2 className="font-bold mb-2">Done</h2>
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
            </div>
        </div >
    );
}