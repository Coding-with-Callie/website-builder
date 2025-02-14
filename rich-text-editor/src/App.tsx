import './App.css';
import {useState} from 'react';
import TipTapEditor from './tiptap/TipTapEditor';
import QuillEditor from './quill/QuillEditor';
import LexicalEditor from './lexical/LexicalEditor';

function App() {
  const [selectEditor, setSelectEditor] = useState<'tipTap' | 'quill' | 'lexical'>('tipTap');

  return (
    <div>
      <h1>Rich Text Editor Comparison</h1>
      <h2>Select an editor:</h2>

      <div className='editor-btns'>
        <button 
        className={`tipTap-btn ${selectEditor === 'tipTap' ? 'active' : ''}`}
        onClick={() => {setSelectEditor('tipTap')}}>
          TipTap
        </button>
        <button 
        className={`tipTap-btn ${selectEditor === 'quill' ? 'active' : ''}`}
        onClick={() => {setSelectEditor('quill')}}>
          Quill
        </button>
        <button 
        className={`tipTap-btn ${selectEditor === 'lexical' ? 'active' : ''}`}
        onClick={() => {setSelectEditor('lexical')}}>
          Lexical
        </button>
      </div>
      <br />
      {selectEditor === 'tipTap' && <TipTapEditor />}
      {selectEditor === 'quill' && <QuillEditor />}
      {selectEditor === 'lexical' &&  <LexicalEditor />}

    </div>
  )
}

export default App
