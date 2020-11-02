import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import hljs from 'highlight.js/lib/highlight';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('json', json);

const StyledContainer = styled.div`
    max-height : 500px;
    overflow-y : scroll;
    background: #282b2e;
    
    & pre{
        padding : 0;
        margin : 0;
    }

/* Androidstudio */

.hljs {
  color: #a9b7c6;
  background: #282b2e;
  display: block;
  overflow-x: auto;
  padding: 0.5em;
}

.hljs-number,
.hljs-literal,
.hljs-symbol,
.hljs-bullet {
  color: #6897BB;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-deletion {
  color: #cc7832;
}

.hljs-variable,
.hljs-template-variable,
.hljs-link {
  color: #629755;
}

.hljs-comment,
.hljs-quote {
  color: #808080;
}

.hljs-meta {
  color: #bbb529;
}

.hljs-string,
.hljs-attribute,
.hljs-addition {
  color: #6A8759;
}

.hljs-section,
.hljs-title,
.hljs-type {
  color: #ffc66d;
}

.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #e8bf6a;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}


`;

const CodeHighlightJSON = ({content}) => {
    const nodeRef = useRef(null);

    useEffect(() => {
        highlight();
    });

    const highlight = () => {
        if (nodeRef) {
            const nodes = nodeRef.current.querySelectorAll('pre');
            nodes.forEach((node) => {
                hljs.highlightBlock(node);
            });
        }
    }

    return (
        <StyledContainer ref={nodeRef} dangerouslySetInnerHTML={{ __html: content }} />
    );
}

export default CodeHighlightJSON;