import React, { useState, useEffect } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";
import showdown from "showdown";

import ReadFromFileButton from "../form/ReadFromFileButton";
import SaveToFileButton from "../form/SaveToFileButton";
import { Wrapper, Row, ButtonRow, StyledMarkdownEditor, StyledMarkdownOutput } from "./styles/MarkdownLogic.styles";

const converterHtmlToMarkdown = new NodeHtmlMarkdown();
const converterMarkdownToHtml = new showdown.Converter();

const MarkdownLogic = () => {
  const [editorMdContent, updateContent] = useState("");
  const [editorHtmlContent, setEditorHtmlContent] = useState("");

  useEffect(() => {
    setEditorHtmlContent(converterMarkdownToHtml.makeHtml(editorMdContent));
  }, [editorMdContent]);

  const handleNewHtml = (html) => {
    updateContent(converterHtmlToMarkdown.translate(html));
  };

  return (
    <Wrapper>
      <ButtonRow>
        <ReadFromFileButton callback={handleNewHtml} allowedFileType="html" wording="Import HTML from file" />
        <ReadFromFileButton callback={updateContent} allowedFileType="markdown" wording="Import Markdown from file" />
        <SaveToFileButton content={editorMdContent} fileType="md" wording="Save markdown to file" />
        <SaveToFileButton content={editorHtmlContent} fileType="html" wording="Save HTML to file" />
      </ButtonRow>
      <Row>
        <StyledMarkdownEditor textareaHandler={updateContent} content={editorMdContent} />
        <StyledMarkdownOutput rawContent={editorMdContent} />
      </Row>
    </Wrapper>
  );
};

export default MarkdownLogic;
