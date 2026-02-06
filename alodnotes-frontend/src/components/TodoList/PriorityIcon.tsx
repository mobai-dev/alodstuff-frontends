import { QuestionMark, Warning, ArrowUpward, ArrowDownward, Remove } from "@mui/icons-material";

export default function PriorityIcon ({ level } : {level: string}) {
    switch (level) {
        case "highest": return <Warning color="error" />;
        case "high": return <ArrowUpward color="warning" />;
        case "medium": return <Remove color="success" />;
        case "low": return <ArrowDownward color="info" />;
        default: return <QuestionMark color="error"/>;
    }
};