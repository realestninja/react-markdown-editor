import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";
import { NodeHtmlMarkdown } from "node-html-markdown";

import ButtonRow from "./ButtonRow";
import {
  Wrapper,
  Row,
  StyledMarkdownEditor,
  StyledMarkdownOutput,
} from "./styles/MarkdownLogic.styles";

const htmlToMarkdownConverter = new NodeHtmlMarkdown();
const markdownToHtmlConverter = new MarkdownIt();

const MarkdownLogic = ({ customImportButtons, customMarkdown }) => {
  const [editorMdContent, setEditorMdContent] = useState("");
  const [editorHtmlContent, setEditorHtmlContent] = useState("");
  const [cursorPos, setCursorPos] = useState(0);

  const editorRef = useRef();

  customMarkdown.forEach((object, index) => {
    markdownToHtmlConverter.use(MarkdownItContainer, `customFunc-${index}`, object);
  });

  useEffect(() => {
    setEditorHtmlContent(markdownToHtmlConverter.render(editorMdContent));
  }, [editorMdContent]);

  const handleNewHtml = html => setEditorMdContent(htmlToMarkdownConverter.translate(html));
  const handleTextareaChange = (target) => {
    console.log("target:", target);
    setEditorMdContent(target.value);
  };

  const injectContent = (string) => {
    const position = 2;
    const newContent = editorMdContent.substring(0, position) + string + editorMdContent.substring(position);
    setEditorMdContent(newContent);
  };

  return (
    <Wrapper>
      <ButtonRow
        editorMdContent={editorMdContent}
        editorHtmlContent={editorHtmlContent}
        handleNewHtml={handleNewHtml}
        setEditorMdContent={setEditorMdContent}
        customImportButtons={customImportButtons}
        addContent={injectContent}
        editorRef={editorRef}
      />
      <Row>
        <StyledMarkdownEditor
          textareaHandler={handleTextareaChange}
          content={editorMdContent}
          editorRef={editorRef}
          setCursorPos={setCursorPos}
        />
        <StyledMarkdownOutput htmlContent={editorHtmlContent} />
      </Row>
    </Wrapper>
  );
};

MarkdownLogic.propTypes = {
  customImportButtons: PropTypes.array,
  customMarkdown: PropTypes.array,
};

MarkdownLogic.defaultProps = {
  customImportButtons: [],
  customMarkdown: [],
};

export default MarkdownLogic;
