import React from 'react'
import NoteIcon from './NoteIcon';
import './SidelinePanel'
import { IconButton, Tooltip } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface NoteProps {
  id: string;
  title: string;
  type: string;
  content?: JSON;
  onDelete: () => void;
  onEditTitle?: (id: string, newDescription: string) => void;
}

export default function Note ({ title, type, onDelete } : NoteProps) {
  return (
    <li>
        <div className='note'>
          <Tooltip title={title}>
            <p className='note-title'>{title}</p>
          </Tooltip>
          <div><NoteIcon type={type}/></div>
          <hr className='mt-2 mb-2' />
          <Tooltip title="Delete this note.">
            <IconButton
              size="large"
              color="primary"
              onClick={onDelete}>
                <Delete />
            </IconButton>
          </Tooltip>
        </div>
    </li>
  )
}

// TODO: encode via JSON, store in localestorage and load it from here
// TODO: delete icon
// TODO: click on div opens the page: /todo/<uuid> <- read from localstorage and/or database