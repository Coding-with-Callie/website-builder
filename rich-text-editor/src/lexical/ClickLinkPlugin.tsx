// By default, Lexical prevents link clicks from opening in a new tab. Handle clicks explicitly to ensure lexical handles clicks on links correctly.
// import and add the the component to Lexical Editor 
// I also needed to ensure that links were properly formatted with http:// or https:// in the LexicalToolbar component 
import { useEffect } from 'react'

const ClickLinkPlugin = () => {

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            let target = e.target as HTMLElement | null;
            while (target) {
                if (target.tagName === 'A' && target.getAttribute('href')) {
                    window.open(target.getAttribute('href')!, '_blank'); // open in a new tab
                    e.preventDefault();
                    return;
                }
                target = target.parentElement;
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick)
    }, []);

  return null;
}

export default ClickLinkPlugin