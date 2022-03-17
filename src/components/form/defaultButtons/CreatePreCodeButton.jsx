import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import CreateMarkdownButton from "../CreateMarkdownButton";

const CreatePreCodeButton = ({ addContent, editorRef, wording }) => {
  const handleClick = () => {
    addContent("\n```\n\n```");
    editorRef.current.focus();
  };

  return (
    <CreateMarkdownButton
      handleClick={handleClick}
      wording={wording}
    />
  );
};

CreatePreCodeButton.propTypes = {
  addContent: PropTypes.func,
  editorRef: PropTypes.object,
  wording: PropTypes.string,
};

CreatePreCodeButton.defaultProps = {
  addContent: noop,
  editorRef: {},
  wording: "",
};

export default CreatePreCodeButton;
