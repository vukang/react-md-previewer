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

![Tux, the Linux mascot](/assets/images/tux.png)

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
        style={{ minHeight: '100vh' }}
        dangerouslySetInnerHTML={{ __html: marked.parse(md) }}
      ></div>
    </SplitPane>
  );
}

export default App;
