import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Markdown.css';

const Markdownreact = () => {

    const [markdown, setMarkdown] = useState("# write")
  return (
    <>
     <div className="center-div">
        <textarea className="left-side" value={markdown} onChange={(e) => setMarkdown(e.target.value)}> </textarea>
        <div className="right-side"><ReactMarkdown>{markdown}</ReactMarkdown></div>
     </div>
    </>
  )
}

export default Markdownreact