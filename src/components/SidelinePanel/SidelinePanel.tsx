import './SidelinePanel.css';
import MenuButton from '../Button/MenuButton';
import Logo from '../Logo/Logo';
import Note from './Note';
import { useState } from 'react';
import { v7 as uuidv7 } from 'uuid';

type Note = {
    id: string;
    title: string;
    type: string;
    //content: JSON;
}

export default function SidelinePanel() {
  const [noteList, setNoteList] = useState<Note[]>([
    {id: "testID", title: "tesfosdjfoisdjfosdijfosdifjsdoifjsdoifjsdofijsdofijsdofijsdofijsdofijsdofijt", type: "todo"},
    {id: "testID2", title: "tesfosdjfoisdjfosdijfosdifjsdoifjsdoifjsdofijsdofijsdofijsdofijsdofijsdofijt", type: "text"}
  ]);

  const addItem = (title: string, type: string) => {
        const newItem = { id: uuidv7(), title, type};
        setNoteList([...noteList, newItem]);
    }

    const deleteItem = (id: string) => {
        setNoteList((prev) => prev.filter((note) => note.id !== id));
    }

  return (
    <>
      <div className="text-center">
        <Logo />
        <p>TODO: german/english</p>
        <p>TODO: light/darkmode</p>
        <p>TODO: login</p>
        <hr className='mt-3 mb-3' />
        <MenuButton />
        <ul className='note-list'>
          {noteList.map((note) => (
            <Note
              key={note.id} {...note}
              onDelete={() => deleteItem(note.id)} />
          ))}
        </ul>
      </div>
    </>
  );
}

// TODO: When logged in, load all notes