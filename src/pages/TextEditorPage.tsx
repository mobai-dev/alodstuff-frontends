import TextEditor from '../components/TextEditor/TextEditor';
import ControlPane from '../components/ControlPane/ControlPane';

export default function TextEditorPage() {
    return (
        <div className='flex flex-col gap-4 w-full h-full'>
            <ControlPane/>
            <TextEditor/>
        </div>
    ); 
}