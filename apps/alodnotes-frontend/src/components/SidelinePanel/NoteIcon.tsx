import { QuestionMark, Notes, Checklist } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export default function NoteIcon ({ type } : {type: string}) {
    switch (type) {
        case "todo": 
            return (
                <Tooltip title="Todolist">
                    <Checklist fontSize="large" />
                </Tooltip>
            );
        case "text": 
            return (
                <Tooltip title="Text">
                    <Notes fontSize="large" />
                </Tooltip>
            );
        default: 
            return (
                <Tooltip title="Unknown type">
                    <QuestionMark color="error" fontSize="large"/>
                </Tooltip>
            )
    }
};