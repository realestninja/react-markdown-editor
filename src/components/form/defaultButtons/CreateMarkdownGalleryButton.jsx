import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import CreateMarkdownButton from "../CreateMarkdownButton";

const dummyContent = "::: gallery\n";
const CreateMarkdownGalleryButton = ({ addContent, editorRef, wording }) => {
  const handleClick = () => {
    addContent(dummyContent);
    editorRef.current.focus();
  };

  return (
    <CreateMarkdownButton
      handleClick={handleClick}
      wording={wording}
    />
  );
};

CreateMarkdownGalleryButton.propTypes = {
  addContent: PropTypes.func,
  editorRef: PropTypes.object,
  wording: PropTypes.string,
};

CreateMarkdownGalleryButton.defaultProps = {
  addContent: noop,
  editorRef: {},
  wording: "",
};

export default CreateMarkdownGalleryButton;
