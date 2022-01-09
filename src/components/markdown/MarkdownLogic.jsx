import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NodeHtmlMarkdown } from "node-html-markdown";
import MarkdownIt from "markdown-it";
import MarkdownItContainer from "markdown-it-container";

import ReadFromFileButton from "../form/ReadFromFileButton";
import SaveToFileButton from "../form/SaveToFileButton";
import { Wrapper, Row, ButtonRow, StyledMarkdownEditor, StyledMarkdownOutput } from "./styles/MarkdownLogic.styles";

const converterHtmlToMarkdown = new NodeHtmlMarkdown();
const converterMarkdownToHtml = new MarkdownIt();

const MarkdownLogic = ({ customImportButtons, customMarkdownSetup }) => {
  const [editorMdContent, setEditorMdContent] = useState("");
  const [editorHtmlContent, setEditorHtmlContent] = useState("");

  customMarkdownSetup.forEach((object, index) => {
    converterMarkdownToHtml.use(MarkdownItContainer, `customFunc-${index}`, object);
  });

  useEffect(() => {
    setEditorHtmlContent(converterMarkdownToHtml.render(editorMdContent));
  }, [editorMdContent]);

  const handleNewHtml = (html) => {
    setEditorMdContent(converterHtmlToMarkdown.translate(html));
  };

  return (
    <Wrapper>
      <ButtonRow>
        <ReadFromFileButton
          callback={handleNewHtml}
          allowedFileType="html"
          wording="Import HTML from file"
        />
        <ReadFromFileButton
          callback={setEditorMdContent}
          allowedFileType="markdown"
          wording="Import Markdown from file"
        />

        {
          customImportButtons.map(buttonProps => (
            <ReadFromFileButton
              callback={handleNewHtml}
              {...buttonProps}
            />
          ))
        }

        <SaveToFileButton content={editorMdContent} fileType="md" wording="Save markdown to file" />
        <SaveToFileButton content={editorHtmlContent} fileType="html" wording="Save HTML to file" />
      </ButtonRow>
      <Row>
        <StyledMarkdownEditor textareaHandler={setEditorMdContent} content={editorMdContent} />
        <StyledMarkdownOutput htmlContent={editorHtmlContent} />
      </Row>
    </Wrapper>
  );
};

MarkdownLogic.propTypes = {
  customImportButtons: PropTypes.array,
  customMarkdownSetup: PropTypes.array,
};

MarkdownLogic.defaultProps = {
  customImportButtons: [],
  customMarkdownSetup: [],
};

export default MarkdownLogic;
