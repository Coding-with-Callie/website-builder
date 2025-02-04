import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import TipTapToolbar from "./TipTapToolbar";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";


const extensions = [
    StarterKit, 
    Underline, 
    Link.configure({
        autolink: true, //when enabled, it adds links as you type
        defaultProtocol: 'https', //when no protocol is defined in link
        protocols: ['http', 'https'] 
    })
];

const content = '<p>Hello, this is TipTap!</p> <p>Hi, Again</p>'

const TipTapEditor = () => {
    const editor = useEditor({
        extensions,
        content,
    })

    // if editor changes, the effect will run
    // cleanup function will run when component is unmounted or reset. destroy() helps prevent memory leaks or lingering event listeners
    useEffect(() => {
        return () => {
            editor?.destroy(); //cleanup on unmount
        }
    }, [editor]);

    if (!editor) {
        return <p>Loading editor...</p>; // Prevent rendering before initialization
    }
  return (
    <>
        <div>
            <h2>TipTap Editor</h2>
            <TipTapToolbar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    
    </>
  )
}

export default TipTapEditor

