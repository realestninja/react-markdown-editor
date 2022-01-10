import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import { StyledTextArea } from "./styles/MarkdownEditor.styles";

const MarkdownEditor = ({
  textareaHandler,
  className,
  placeholder,
  content,
  editorRef,
}) => (
  <StyledTextArea
    placeholder={placeholder}
    className={className}
    value={content}
    ref={editorRef}
    onInput={e => textareaHandler(e.target)}
  />
);

MarkdownEditor.propTypes = {
  textareaHandler: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  content: PropTypes.string,
  editorRef: PropTypes.object,
};

MarkdownEditor.defaultProps = {
  textareaHandler: noop,
  className: "",
  placeholder: "Add some markdown over here",
  content: null,
  editorRef: {},
};

export default MarkdownEditor;
