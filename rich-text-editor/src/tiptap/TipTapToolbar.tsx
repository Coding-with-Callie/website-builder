import { Editor } from "@tiptap/react";
import LinkInputField from "./LinkInputField";

// ensures that the Toolbar component gets an Editor instance, or safely handles a null value to prevent TS errors
interface ToolbarProps {
    editor: Editor | null;
}

const TipTapToolbar = ({ editor }: ToolbarProps) => {
    if (!editor) {
        return null; //don't render if the editor is not initialized
    }

const removeLink = () => {
    if (editor.isActive('link')) {
        editor.chain().focus().unsetLink().run();
    }
};

  return (
    <div>
        <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editor.can().chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editor.can().chain().focus().toggleItalic().run()}>Italic</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} disabled={!editor.can().chain().focus().toggleUnderline().run()}>Underline</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} disabled={!editor.can().chain().focus().toggleBulletList().run()}>Bullet List</button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} disabled={!editor.can().chain().focus().toggleCodeBlock().run()}>Code Block</button>
        <LinkInputField editor={editor}/>
        <button onClick={removeLink} disabled={!editor.isActive('link')}>Remove Link</button>
    </div>
  )
}

export default TipTapToolbar

