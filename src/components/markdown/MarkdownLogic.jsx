import React, { useState } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";

import MarkdownOutput from "./MarkdownOutput";
import MarkdownEditor from "./MarkdownEditor";
import FileReader from "../form/FileReader";
import { Wrapper, Row, ButtonRow } from "./styles/MarkdownLogic.styles";

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
        <MarkdownEditor textareaHandler={updateContent} content={editorContent} />
        <MarkdownOutput rawContent={editorContent} />
      </Row>
    </Wrapper>
  );
};

export default MarkdownLogic;
