import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import DefaultButtons from "../form/defaultButtons/DefaultButtons";
import ReadFromFileButton from "../form/ReadFromFileButton";
import SaveToFileButton from "../form/SaveToFileButton";
import { ButtonRowWrapper, ButtonGroup } from "./styles/ButtonRow.styles";

const ButtonRow = ({
  editorMdContent,
  editorHtmlContent,
  handleNewHtml,
  setEditorMdContent,
  addContent,
  customImportButtons,
  editorRef,
  defaultButtons,
}) => (
  <ButtonRowWrapper>
    {defaultButtons && (
      <DefaultButtons
        addContent={addContent}
        editorRef={editorRef}
      />
    )}
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
  defaultButtons: PropTypes.bool,
  editorMdContent: PropTypes.string,
  editorHtmlContent: PropTypes.string,
  handleNewHtml: PropTypes.func,
  setEditorMdContent: PropTypes.func,
  addContent: PropTypes.func,
  customImportButtons: PropTypes.array,
  editorRef: PropTypes.object,
};

ButtonRow.defaultProps = {
  defaultButtons: false,
  editorMdContent: "",
  editorHtmlContent: "",
  handleNewHtml: noop,
  setEditorMdContent: noop,
  addContent: noop,
  customImportButtons: [],
  editorRef: {},
};

export default ButtonRow;
