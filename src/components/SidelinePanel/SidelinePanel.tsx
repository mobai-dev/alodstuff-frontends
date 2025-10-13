import './SidelinePanel.css';
import AddButton from '../Button/AddButton';
import Logo from '../Logo/Logo';

export default function SidelinePanel() {
  return (
    <>
      <div className="text-center">
        <Logo />
        <hr className='mt-3 mb-3' />
        <AddButton />
      </div>
    </>
  )
}

// TODO: When logged in, load all notes