import './SidelinePanel.css';
import MenuButton from '../Button/MenuButton';
import Logo from '../Logo/Logo';

export default function SidelinePanel() {
  return (
    <>
      <div className="text-center">
        <Logo />
        <MenuButton />
        <hr className='mt-3 mb-3' />
      </div>
    </>
  )
}

// TODO: When logged in, load all notes