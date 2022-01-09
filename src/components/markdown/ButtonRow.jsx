import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import ReadFromFileButton from "../form/ReadFromFileButton";
import SaveToFileButton from "../form/SaveToFileButton";
import { ButtonRowWrapper, ButtonGroup } from "./styles/ButtonRow.styles";

const ButtonRow = ({
  editorMdContent,
  editorHtmlContent,
  handleNewHtml,
  setEditorMdContent,
  customImportButtons,
}) => (
  <ButtonRowWrapper>
    <ButtonGroup>
      <button type="button">hi</button>
    </ButtonGroup>
    <ButtonGroup>
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
    </ButtonGroup>
  </ButtonRowWrapper>
);

ButtonRow.propTypes = {
  editorMdContent: PropTypes.string,
  editorHtmlContent: PropTypes.string,
  handleNewHtml: PropTypes.func,
  setEditorMdContent: PropTypes.func,
  customImportButtons: PropTypes.array,
};

ButtonRow.defaultProps = {
  editorMdContent: "",
  editorHtmlContent: "",
  handleNewHtml: noop,
  setEditorMdContent: noop,
  customImportButtons: [],
};

export default ButtonRow;
