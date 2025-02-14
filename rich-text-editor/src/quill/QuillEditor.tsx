// Configuration to set up the editor
import { useEffect, useRef} from 'react'; // useRef creates a reference to the DOM element
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill's styles


const QuillEditor = () => {
    // HTMLDivElement is the type annotation that specifies the reference is for a div element. The initial value is null since the reference will be assigned to the actual DOM element when the component is rendered.
    // any html element can be used but I am using div bc it is a generic container that works well with the editor
    const editorRef = useRef<HTMLDivElement>(null);

    const quillRef = useRef<Quill | null>(null); //reference to store Quill instance to fix double toolbar in editor

    useEffect(() => {
        // checks to see if editorRef is properly attached to a DOM element
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, { //initialize new quill editor with configurations
                theme: 'snow',
                placeholder: 'Write something!',
                modules: {
                    toolbar: [ //using a customized toolbar versus Quill's default toolbar
                        ['bold', 'italic', 'underline'],
                        [{ list: "bullet" }],
                        ['link'],
                        ['code-block']
                    ], 
                },
                debug: true, // set the debug level 
            }); 
        };

        // clean up function for quill toolbar since it is attached to the DOM, which is causing it to persist when switching between editors on main app.tsx page. 
        return () => {
            if (quillRef.current) {
                quillRef.current.root.innerHTML = ''; // clear content
                document.querySelector('.ql-toolbar')?.remove(); //remove the toolbar
                quillRef.current = null; //reset quill instance + prevent memory leaks
            }
        };


    }, [])

  return (
    <div>
        <h2>Quill Editor</h2>
        {/* editor container */}
         <div ref={editorRef} style={{ height: '300px' }}/> 
    </div>
   
  )
}

export default QuillEditor