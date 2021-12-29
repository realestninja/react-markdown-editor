import React, { useState } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";

import FileReader from "../form/FileReader";
import { Wrapper, Row, ButtonRow, StyledMarkdownEditor, StyledMarkdownOutput } from "./styles/MarkdownLogic.styles";

const nhm = new NodeHtmlMarkdown();

const MarkdownLogic = () => {
  const [editorContent, updateContent] = useState("");

  const handleNewHtml = (html) => {
    updateContent(nhm.translate(html));
  };

  return (
    <Wrapper>
      <ButtonRow>
        <FileReader callback={handleNewHtml} allowedFileType="html" wording="Import HTML from file" />
        <FileReader callback={updateContent} allowedFileType="markdown" wording="Import Markdown from file" />
      </ButtonRow>
      <Row>
        <StyledMarkdownEditor textareaHandler={updateContent} content={editorContent} />
        <StyledMarkdownOutput rawContent={editorContent} />
      </Row>
    </Wrapper>
  );
};

export default MarkdownLogic;
