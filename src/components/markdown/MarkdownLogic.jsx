import React, { useState, useEffect } from "react";
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

  customMarkdown.forEach((object, index) => {
    markdownToHtmlConverter.use(MarkdownItContainer, `customFunc-${index}`, object);
  });

  useEffect(() => {
    setEditorHtmlContent(markdownToHtmlConverter.render(editorMdContent));
  }, [editorMdContent]);

  const handleNewHtml = html => setEditorMdContent(htmlToMarkdownConverter.translate(html));

  return (
    <Wrapper>
      <ButtonRow
        editorMdContent={editorMdContent}
        editorHtmlContent={editorHtmlContent}
        handleNewHtml={handleNewHtml}
        setEditorMdContent={setEditorMdContent}
        customImportButtons={customImportButtons}
      />
      <Row>
        <StyledMarkdownEditor textareaHandler={setEditorMdContent} content={editorMdContent} />
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
