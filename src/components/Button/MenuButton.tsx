import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MenuButton() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                size="large"
                onClick={handleClick}
                color="primary"
                id="demo-positioned-menu">
                <AddCircleIcon />
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => { handleClick; navigate("/todo")}}>Todo</MenuItem>
                <MenuItem onClick={() => { handleClick; navigate("/text")}}>Text</MenuItem>
            </Menu>
        </div>
    );
}