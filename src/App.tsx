import SidelinePanel from './components/SidelinePanel/SidelinePanel';
import EmptyPage from './pages/EmptyPage';
import TextEditorPage from './pages/TextEditorPage';
import TodoListPage from './pages/TodoListPage';

export default function App() {
  return (
    <div className='flex gap-4 w-full h-full'>
      <SidelinePanel />
      <TodoListPage />
      {/*<EmptyPage />*/}
      {/*<TextEditorPage />*/}
      {/*<TodoListPage />*/}
    </div>
  );
}