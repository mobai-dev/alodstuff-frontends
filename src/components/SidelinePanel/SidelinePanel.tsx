import './SidelinePanel.css';
import MenuButton from '../Button/MenuButton';
import Logo from '../Logo/Logo';
import SidelineItem from './SidelineItem';
import { useState } from 'react';

type SidelineItem = {
    id: number;
    title: string;
    type: string;
}

export default function SidelinePanel() {
  const [noteList, setNoteList] = useState<SidelineItem[]>([]);

  return (
    <>
      <div className="text-center">
        <Logo />
        <MenuButton />
        <hr className='mt-3 mb-3' />
        <ul className='p-0'>
          {todoList.map((todo) => (
            <SidelineItem
              key={todo.id} {...todo}
              onDelete={() => deleteItem(todo.id)} />
          ))}
        </ul>
      </div>
    </>
  )
}

// TODO: When logged in, load all notes