// Configuration to set up the editor
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import TipTapToolbar from "./TipTapToolbar";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import './styles.css';

//tiptap extensions like nodes and marks. The StarterKit contains the majority of the node and mark extensions, but you will need to manually add some like Underline and Link.
const extensions = [
    StarterKit, 
    Underline, 
    Link.configure({
        autolink: true, //when enabled, it adds links as you type
        defaultProtocol: 'https', //when no protocol is defined in link
        protocols: ['http', 'https'] 
    })
];

// there is the option of defining the content outside of the editor. For example:
// const content =  <p>Hi, Again</p>'

const TipTapEditor = () => {
    const editor = useEditor({
        extensions,
        content: '<p></p>' //this is the content area that will be formatted using the editor; default is <p></> tag but it can be empty strings as well
    });

    // if editor changes, the effect will run
    // cleanup function will run when component is unmounted or reset. destroy() helps prevent memory leaks or lingering event listeners
    useEffect(() => {
        return () => {
            editor?.destroy(); //cleanup on unmount
        }
    }, [editor]);

    // code for form submission if desired; currently it is not being used
    // const handleFormSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();

    //     if (editor) {
    //         setContent(editor.getHTML()); //save the content
    //         console.log("SUBMITTED CONTENT:", editor.getHTML());
    //     }
        
    // }

    // Prevent rendering before initialization
    if (!editor) {
        return <p>Loading editor...</p>; 
    }
  return (  
        <div>
            <h2>TipTap Editor</h2>
            <div className='editor-container'>
                <TipTapToolbar editor={editor}/>
                <EditorContent editor={editor} className='editor-box'/>
            </div>
        </div>
        
  )
}

export default TipTapEditor

