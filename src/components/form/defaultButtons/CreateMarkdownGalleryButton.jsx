import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import CreateMarkdownButton from "../CreateMarkdownButton";

const dummyContent = "::: gallery";
const CreateMarkdownGalleryButton = ({ addContent, editorRef }) => {
  const handleClick = () => {
    addContent(dummyContent);
    editorRef.current.focus();
  };

  return (
    <CreateMarkdownButton
      handleClick={handleClick}
      wording="hello world"
    />
  );
};

CreateMarkdownGalleryButton.propTypes = {
  addContent: PropTypes.func,
  editorRef: PropTypes.object,
};

CreateMarkdownGalleryButton.defaultProps = {
  addContent: noop,
  editorRef: {},
};

export default CreateMarkdownGalleryButton;
