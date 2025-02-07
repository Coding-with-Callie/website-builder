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
                    ], //enable the toolbar
                },
                debug: true, // set the debug level 
            }); 
        }


    }, [])

  return (
    <div ref={editorRef} style={{ height: '300px' }}/> // Editor container
  )
}

export default QuillEditor