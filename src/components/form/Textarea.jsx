import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";
import { StyledTextArea } from "./styles/Textarea.styles";

const Textarea = ({ textareaHandler, className }) => (
  <StyledTextArea
    placeholder="Add some markdown over here"
    className={className}
    onInput={e => textareaHandler(e.target.value)}
  />
);

Textarea.propTypes = {
  textareaHandler: PropTypes.func,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  textareaHandler: noop,
  className: "",
};

export default Textarea;
