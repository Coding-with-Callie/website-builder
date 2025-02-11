import { FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND } from "lexical"; // FORMAT_TEXT contains commands for text-level formatting like bold, italic, underline, etc., and FORMAT_ELEMENT contains commands for element-level formatting like bullet list, code block, link, etc.
import { $getSelection, $isRangeSelection } from 'lexical'; // function to retreive current selection within editor, a function that checks if the current selection is a range (boolean), and a class (LexicalEditor) that represents the editor instance itself for type safety if needed
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'; // a hook that provides access to the Lexical editor context and give you the editor instance-it returns an array with the first element being the editor instance
import {TextFormatType, BlockFormatType } from './FormatTypes';


const LexicalToolbar = () => {
    const [editor] = useLexicalComposerContext(); //destructure editor instance which gives access to core functionalities and methods

    const applyTextFormat = (formatType: TextFormatType) => {
      editor.update(() => {
        const selection = $getSelection();
            if ($isRangeSelection(selection)) {
                // Direct string command (e.g. "bold")
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
            }
      })
    }




  return (
    <div>
        <button onClick={() => {applyTextFormat('bold')}}>B</button>
        <button onClick={() => {applyTextFormat('italic')}}><i>I</i></button>
        <button onClick={() => {applyTextFormat('underline')}}><u>U</u></button>
    </div>
  )
}

export default LexicalToolbar