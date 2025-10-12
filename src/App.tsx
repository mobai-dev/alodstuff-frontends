import SidelinePanel from './components/SidelinePanel/SidelinePanel';
import TextEditorPage from './pages/TextEditorPage';

function App() {
  return (
    <div className='flex gap-4 w-full h-full'>
      <SidelinePanel />
      <TextEditorPage />
    </div>
    
  )
}

export default App
