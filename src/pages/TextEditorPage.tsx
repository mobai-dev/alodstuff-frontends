import TextEditor from '../components/TextEditor/TextEditor';
import ControlPane from '../components/ControlPane/ControlPane';
import SidelinePanel from '../components/SidelinePanel/SidelinePanel';

export default function TextEditorPage() {
    return (
        <div className='flex gap-4 w-full h-full'>
            <SidelinePanel />
            <div className='flex flex-col gap-4 w-full h-full'>
                <ControlPane/>
                <TextEditor/>
            </div>
        </div>
    ); 
}