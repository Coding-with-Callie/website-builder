import './App.css';
import TipTapEditor from './tiptap/TipTapEditor';
import QuillEditor from './quill/QuillEditor';

function App() {
  

  return (
    <div>
      <TipTapEditor />

      <div>
        <h2>Quill Editor</h2>
        <QuillEditor />
      </div>

    </div>
  )
}

export default App
