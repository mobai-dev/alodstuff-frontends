import TodoCreationWizard from '../components/TodoList/TodoCreationWizard'
import TodoItem from '../components/TodoList/TodoItem'
import {useState} from 'react'

export default function TodoListPage() {
    const [todoList, setTodoList] = useState([
        { id: 1, description: "Write code", priority: "high" },
        { id: 2, description: "Test features", priority: "medium" },
    ]);
    const [doneList, setDoneList] = useState([])

    const deleteItem = (id: number) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <div className='flex flex-col gap-3 w-full'>
            <TodoCreationWizard />
            <p>Open</p>
            <ul className='p-0'>
                {todoList.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onDelete={() => deleteItem(todo.id)} />
                ))}
            </ul>
            <hr />
            <p>Done</p>
        </div>
    );
}