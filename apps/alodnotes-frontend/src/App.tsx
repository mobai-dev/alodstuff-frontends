import { Routes, Route } from 'react-router-dom';
import SidelinePanel from './components/SidelinePanel/SidelinePanel';
import EmptyPage from './pages/EmptyPage';
import TextEditorPage from './pages/TextEditorPage';
import TodoListPage from './pages/TodoListPage';

export default function App() {
  return (
    <div className='flex gap-4 w-full h-full'>
      <SidelinePanel />
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route path="/todo" element={<TodoListPage />} />
        <Route path="/text" element={<TextEditorPage />} />
      </Routes>
      {/*<EmptyPage />*/}
      {/*<TextEditorPage />*/}
      {/*<TodoListPage />*/}
    </div>
  );
}