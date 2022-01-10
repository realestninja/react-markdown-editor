import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

const dummyContent = "::: gallery";
const CreateMarkdownButton = ({ addContent, editorRef }) => {
  const handleClick = () => {
    addContent(dummyContent);
    editorRef.current.focus();
  };

  return (
    <button type="button" onClick={handleClick}>CreateMarkdownButton</button>
  );
};

CreateMarkdownButton.propTypes = {
  addContent: PropTypes.func,
  editorRef: PropTypes.object,
};

CreateMarkdownButton.defaultProps = {
  addContent: noop,
  editorRef: {},
};

export default CreateMarkdownButton;
