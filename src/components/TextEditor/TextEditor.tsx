import './TextEditor.css';
import { useState } from 'react';

function TextEditor() {
    const [text, setText] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let input = event.target.value;

        // TODO: put this somewhere else. maybe make it configurable in a json or so
        const replacements: Record<string, string> = {
            "--": "\u2012",
            ".-": "\u2022",
            "...": "\u2026",
            "<-": "\u27F5",
            "->": "\u27F6",
            "<>": "\u27F7",
            "!!": "\u2757"
        }

        for(const [symbol, replacement] of Object.entries(replacements)) {
            const regex = new RegExp(symbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
            input = input.replace(regex, replacement);
        }

        setText(input);
    }

    return (
        <textarea 
            placeholder='Type something...'
            value={text}
            onChange={handleChange} />
    )
}
export default TextEditor;

// TODO:
// bold, italic, normal
// colors 
// font sizes

// clear button, save button, save locally, import?
