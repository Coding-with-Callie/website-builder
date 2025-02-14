import { Editor } from "@tiptap/react";
import LinkInputField from "./LinkInputField"; //imported LinkInputField component for setting link formatting
import './styles.css';

// ensures that the Toolbar component gets an Editor instance, or safely handles a null value to prevent TS errors
interface ToolbarProps {
    editor: Editor | null;
}

const TipTapToolbar = ({ editor }: ToolbarProps) => {
    if (!editor) {
        return null; //don't render if the editor is not initialized
    }
// function to unlink a link
const removeLink = () => {
    if (editor.isActive('link')) {
        editor.chain().focus().unsetLink().run();
    }
};

  return (
    <div className='toolbar'>
        <button 
        className={editor.isActive('bold') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()}>
            B
        </button>
        <button 
        className={editor.isActive('italic') ? 'active' : ''}
        onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()}>
            <i>I</i>
        </button>
        <button
        className={editor.isActive('underline') ? 'active' : ''} 
        onClick={() => editor.chain().focus().toggleUnderline().run()} disabled={!editor.can().chain().focus().toggleUnderline().run()}>
            <u>U</u>
        </button>
        <button
        className={editor.isActive('bulletList') ? 'active' : ''} 
        onClick={() => editor.chain().focus().toggleBulletList().run()} disabled={!editor.can().chain().focus().toggleBulletList().run()}>
            •
        </button>
        <button
        className={editor.isActive('codeBlock') ? 'active' : ''} 
        onClick={() => editor.chain().focus().toggleCodeBlock().run()} disabled={!editor.can().chain().focus().toggleCodeBlock().run()}>
            {'</>'}
        </button>
        <LinkInputField editor={editor}/>
        <button onClick={removeLink} disabled={!editor.isActive('link')}>Unlink 🔗</button>
    </div>
  )
}

export default TipTapToolbar

