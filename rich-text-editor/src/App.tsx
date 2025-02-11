import './App.css';
import TipTapEditor from './tiptap/TipTapEditor';
import QuillEditor from './quill/QuillEditor';
import LexicalEditor from './lexical/LexicalEditor';

function App() {
  

  return (
    <div>
      <h1>Rich Text Editor Comparison</h1>

      {/* <div>
        <TipTapEditor />
      </div> */}
      
      {/* <div>
        <h2>Quill Editor</h2>
        <QuillEditor />
      </div> */}

      <div>
        <h2>Lexical Editor</h2>
        <LexicalEditor />
      </div>

    </div>
  )
}

export default App
