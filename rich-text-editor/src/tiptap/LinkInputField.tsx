//created custom input field for link since one is not provided by TipTap. Alternative is to use a modal.
import React, {useEffect, useState} from 'react';
import { Editor } from "@tiptap/react";

interface LinkInputFieldProps {
    editor: Editor | null;
}

const LinkInputField: React.FC<LinkInputFieldProps> = ({ editor }) => {
    const [urlInput, setUrlInput] = useState("");
    const [isInputVisible, setIsInputVisible] = useState(false);

    const handleAddLinkClick = () => {
        if (!editor) return;

        setIsInputVisible(true);
    }

    const setLink = () => {
        if (!editor) return;

        //ensure the URL has a protocol
        const formattedUrl = 
            urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput :
            `https://${urlInput}`

        // set the link using the editor
        editor.chain().focus().extendMarkRange('link').setLink({ href: formattedUrl}).run();

        //clear input and hide the field
        setUrlInput(""); //clear input field    
        setIsInputVisible(false);
    };

    // function to hide the link input field when any editor change occurs
    useEffect(() => {
        if (!editor) return;

        //Hide input field when user clicks away
        const handleHideInputField = () => setIsInputVisible(false);

        editor.on('transaction', handleHideInputField);

        // cleanup: remove event listener when component unmounts
        return () => {
            editor.off('transaction', handleHideInputField);
        }
    }, [editor])

  return (
    <div>
        <button onClick={handleAddLinkClick} disabled={!editor}>Link 🔗</button>

        {isInputVisible && (
            <input 
            type="text" 
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder='Enter link + Press Enter'
            onKeyDown={(e) => e.key === "Enter" && setLink()} //allow pressing enter to set link
            onBlur={() => setIsInputVisible(false)} //hide input when clicking away
            autoFocus
        />
        )}
        
        
    </div>
  )
}

export default LinkInputField