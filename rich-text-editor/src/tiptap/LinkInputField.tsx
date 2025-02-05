import React, {useState} from 'react';
import { Editor } from "@tiptap/react";

interface LinkInputFieldProps {
    editor: Editor | null;
}

const LinkInputField: React.FC<LinkInputFieldProps> = ({ editor }) => {
    const [urlInput, setUrlInput] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [highlightSelection, setHighlightSelection] = useState<any>(null);

    const handleAddLinkClick = () => {
        if (!editor) return;

        // store the current highlighted selection before losing focus
        setHighlightSelection(editor.state.selection);

        setIsInputVisible(true);
    }

    const setLink = () => {
        if (!editor) return;

        //restore highlight selection
        editor.view.dispatch(editor.state.tr.setSelection(highlightSelection));

        //ensure the URL has a protocol
        const formattedUrl = 
            urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput :
            `https://${urlInput}`

        // set the link using the editor
        editor.chain().focus().extendMarkRange('link').setLink({ href: formattedUrl}).run();

        //clear input and hide the field
        setUrlInput(""); //clear input field    
        setIsInputVisible(false);
    }
  return (
    <div>
        <button onClick={handleAddLinkClick} disabled={!editor}>Add Link</button>

        {isInputVisible && (
            <input 
            type="text" 
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder='Enter link + Press Enter'
            onKeyDown={(e) => e.key === "Enter" && setLink()} //allow pressing enter to set link
            autoFocus
        />
        )}
        
        
    </div>
  )
}

export default LinkInputField