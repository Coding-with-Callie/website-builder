import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import TipTapToolbar from "./TipTapToolbar";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import './styles.css';

//tiptap extensions like nodes and marks. The starter kit contains the majority of the node and mark extensions, but you will need to manually add some like Underline and Link.
const extensions = [
    StarterKit, 
    Underline, 
    Link.configure({
        autolink: true, //when enabled, it adds links as you type
        defaultProtocol: 'https', //when no protocol is defined in link
        protocols: ['http', 'https'] 
    })
];


// const content =  <p>Hi, Again</p>'

const TipTapEditor = () => {
    const editor = useEditor({
        extensions,
        content: '<p></p>' //this is the content that will be styled using the editor; currently it is hardcoded
    });

    const [content, setContent] = useState("");

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

