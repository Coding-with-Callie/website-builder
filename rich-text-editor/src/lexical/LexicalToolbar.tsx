import { FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, $createParagraphNode } from "lexical"; // FORMAT_TEXT contains commands for text-level formatting like bold, italic, underline, etc., and FORMAT_ELEMENT contains commands for element-level formatting like bullet list, code block, link, etc.
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isListNode, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import { registerCodeHighlighting, $createCodeNode, $isCodeNode } from "@lexical/code"; // functions to create a code block
import { $getSelection, $isRangeSelection } from 'lexical'; // function to retreive current selection within editor, a function that checks if the current selection is a range (boolean), and a class (LexicalEditor) that represents the editor instance itself for type safety if needed
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'; // a hook that provides access to the Lexical editor context and give you the editor instance-it returns an array with the first element being the editor instance
import {TextFormatType, BlockFormatType } from './FormatTypes';
import { $setBlocksType } from '@lexical/selection';
import './styles.css';
import { useEffect } from "react";



const LexicalToolbar = () => {
    const [editor] = useLexicalComposerContext(); //destructure editor instance which gives access to core functionalities and methods

    const applyTextFormat = (formatType: TextFormatType) => {
      editor.update(() => {
        const selection = $getSelection();
        // console.log('selection:', selection);

            if ($isRangeSelection(selection)) {
              console.log('Current Selection:', selection);
              console.log('applying format:', formatType);
                // Direct string command (e.g. "bold")
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);

                // selection.formatText(formatType);
            }
      })
    }

    const applyBlockFormat = (formatType: BlockFormatType) => {
      editor.update(() => {
        const selection = $getSelection();
        console.log('selection:', selection);
        if ($isRangeSelection(selection)) {
          // const anchorNode = selection.anchor.getNode();
          const parent = selection.anchor.getNode().getParent();
          console.log('applying element format:', formatType);

          switch (formatType) {
            case 'bullet':
              if (parent && $isListNode(parent)) {
                // if it's already a list, convert to a paragraph
                $setBlocksType(selection, () => $createParagraphNode());
              } else {
                // otherwise apply list formatting
                editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
              }
              
              break;
            case 'code':
              if (parent && $isListNode(parent)) {
                // toggle code block off -> convert to a paragraph
                $setBlocksType(selection, () => $createParagraphNode());
              } else {
                $setBlocksType(selection, () => $createCodeNode())
              }
              
              break;
            case 'link':
              let url = prompt('Enter Url');
              
              if (url) {
                //ensure the URL starts with http:// or https://
                if (!url.startsWith('http://') && !url.startsWith('https://')) {
                  url = 'https://' + url;
                }
                console.log('Inserting link', url);
                editor.dispatchCommand(TOGGLE_LINK_COMMAND, url)
              }  
              break;  
          }
        }
      })
    }

    // for debugging the applying multiple formats at time issue: exposing editor instance and FORMAT_TEXT_COMMAND globally to see if applying multiple formats, like bold + italicize, at a time works via console. UPDATE: this did not work
    // commands are executing but but not layering the styles correctly
    useEffect(() => {
      // Attach editor instance to window for debugging
      (window as any).lexicalEditor = editor;
      (window as any).FORMAT_TEXT_COMMAND = FORMAT_TEXT_COMMAND;
  }, [editor]);
  


  return (
    <div className='toolbar'>
        <button onClick={() => {applyTextFormat('bold')}}>B</button>
        <button onClick={() => {applyTextFormat('italic')}}><i>I</i></button>
        <button onClick={() => {applyTextFormat('underline')}}><u>U</u></button>
        <button onClick={() => {applyBlockFormat('bullet')}}>•</button>
        <button onClick={() => {applyBlockFormat('code')}}>{'</>'}</button>
        <button onClick={() => {applyBlockFormat('link')}}>🔗</button>
    </div>
  )
}

export default LexicalToolbar