import { LexicalComposer } from '@lexical/react/LexicalComposer'; //core provider for managing the editor instance
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'; // enables the editor to support rich text editing
import { ListPlugin } from '@lexical/react/LexicalListPlugin'; // enables the editor to support lists
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'; // enables the editor to supoort links
import { ContentEditable } from '@lexical/react/LexicalContentEditable'; // provides the editable area
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'; //add undo/redo functionality
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'; // prevents crashes due to editor errors
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'; // Ensures editor focuses on mount
import LexicalToolbar from './LexicalToolbar';

import { ListNode, ListItemNode} from '@lexical/list';
import { LinkNode } from '@lexical/link';


const theme = {
    paragraph: 'text-base', //example theme styling 
};

//initial config is defined outside of LexicalEditor function to prevent unnecessary re-renders and unnecessary reinitializations of LexicalComposer
const initialConfig = {
    namespace: 'MyLexicalEditor', //used to uniquely identify this editor instance
    theme,
    nodes: [ListNode, ListItemNode, LinkNode], 
    onError: (error: Error) => console.error('Lexical error:',  error) // handle errors in editor
};

const LexicalEditor = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
        <LexicalToolbar />
        <RichTextPlugin
        contentEditable={<ContentEditable className='border p-2' autoFocus />}
        placeholder={<div className='text-gray-400'>Type here...</div>}
        ErrorBoundary={LexicalErrorBoundary}
        />
        <ListPlugin />
        <LinkPlugin />
        <AutoFocusPlugin />
    </LexicalComposer>
  )
}

export default LexicalEditor