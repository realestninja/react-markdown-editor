import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import { StyledTextArea } from "./styles/MarkdownEditor.styles";

const MarkdownEditor = ({ textareaHandler, className, placeholder, content }) => (
  <StyledTextArea
    placeholder={placeholder}
    className={className}
    value={content}
    onInput={e => textareaHandler(e.target.value)}
  />
);

MarkdownEditor.propTypes = {
  textareaHandler: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  content: PropTypes.string,
};

MarkdownEditor.defaultProps = {
  textareaHandler: noop,
  className: "",
  placeholder: "Add some markdown over here",
  content: null,
};

export default MarkdownEditor;
