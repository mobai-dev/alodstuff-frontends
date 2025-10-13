import { ArrowUpward, ArrowDownward, Remove, Warning, Edit, Delete, Check } from "@mui/icons-material";
import { IconButton, TextField, Tooltip } from '@mui/material';
import './TodoList.css'
import { useState } from "react";

const PriorityIcon = ({ level = 'medium' }) => {
    switch (level) {
        case "highest": return <Warning color="error" />;
        case "high": return <ArrowUpward color="warning" />;
        case "medium": return <Remove color="success" />;
        case "low": return <ArrowDownward color="info" />;
    }
};

interface TodoItemProps {
    id: number;
    description: string;
    priority: string;
    onDelete: () => void;
    onEdit?: (id: number, newDescription: string) => void;
}

export default function TodoItem({ id, description, priority, onDelete, onEdit }: TodoItemProps) {
    const [editMode, setEditMode] = useState(false);
    const [tempDescription, setTempDescription] = useState(description);

    const handleSave = () => {
        if (onEdit) onEdit(id, tempDescription);
        setEditMode(false);
    };

    return (
        <li className="todo-item">
            <div className="flex items-center space-x-2">
                <input type="radio" />
                <div className="priority flex items-center justify-center">
                    <PriorityIcon level={priority} />
                </div>
                {editMode ? (
                    <Tooltip title="Save">
                        <IconButton size="large" color="success" onClick={handleSave}>
                            <Check />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Edit">
                        <IconButton size="large" color="primary" onClick={() => setEditMode(true)}>
                            <Edit />
                        </IconButton>
                    </Tooltip>
                )}
                <Tooltip title="Delete">
                    <IconButton
                        size="large"
                        color="primary"
                        onClick={onDelete}>
                        <Delete />
                    </IconButton>
                </Tooltip>
            </div>
            {editMode ? (
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="primary"
                    sx={{ input: { color: 'white' } }}
                    value={tempDescription}
                    onChange={(e) => setTempDescription(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSave()}
                />
            ) : (
                <p>{tempDescription}</p>
            )}
        </li>
    );
}

// button to make it done, text (description of todo), edit button, delete button
// maybe add priorities? highest, high, medium, low with different icons