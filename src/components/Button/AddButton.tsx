import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

export default function AddButton() {
    const openSelectionMenu = () => {
        // TODO: Implement open selection menu
    }

    return (
        <IconButton
            size="large"
            onClick={openSelectionMenu}
            color="primary">
           <AddCircleIcon/>    
        </IconButton>
    );
}