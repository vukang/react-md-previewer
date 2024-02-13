import './App.css';
import SplitPane from 'react-split-pane';
import { marked } from 'marked';
import { useState } from 'react';

marked.setOptions({
  gfm: true,
  breaks: true,
});

// import marked parser
// import SplitPane https://www.npmjs.com/package/react-split-pane

function App() {
  const [md, setMd] = useState(`# Marked in Node.js

## Live markdown previewer
  
> Blockquote
  
* list item

\`inlinecode with backticks\`

    codeblock indented by 4 spaces or tab
  
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png)
> lewing@isc.tamu.edu Larry Ewing and The GIMP, Attribution, via Wikimedia Commons

---
  
Rendered by **marked**.`);

  const handleChange = (e) => {
    setMd(e.currentTarget.value);
  };

  return (
    <SplitPane split='vertical' minSize={100}>
      <div style={{ height: '100vh' }}>
        <textarea
          id='editor'
          style={{ minHeight: '100vh', width: '99%' }}
          onChange={handleChange}
          value={md}
        ></textarea>
      </div>
      <div
        id='preview'
        style={{ minHeight: '98vh' }}
        dangerouslySetInnerHTML={{ __html: marked.parse(md) }}
      ></div>
    </SplitPane>
  );
}

export default App;
