import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import CreateMarkdownGalleryButton from "./CreateMarkdownGalleryButton";
import { ButtonGroup } from "../../markdown/styles/ButtonRow.styles";

const DefaultButtons = ({
  addContent,
  editorRef,
}) => (
  <ButtonGroup>
    <CreateMarkdownGalleryButton
      addContent={addContent}
      editorRef={editorRef}
      wording="Gallery"
    />
  </ButtonGroup>
);

DefaultButtons.propTypes = {
  addContent: PropTypes.func,
  editorRef: PropTypes.object,
};

DefaultButtons.defaultProps = {
  addContent: noop,
  editorRef: {},
};

export default DefaultButtons;
