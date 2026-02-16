import SidelinePanel from "../components/SidelinePanel/SidelinePanel";
import TodoList from "../components/TodoList/TodoList";

export default function TodoListPage() {
    return (
        <div className='flex gap-4 w-full h-full'>
            <SidelinePanel />
            <TodoList />
        </div>
    );
}