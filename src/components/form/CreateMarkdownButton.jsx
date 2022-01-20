import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

const CreateMarkdownButton = ({ handleClick, wording }) => (
  <button type="button" onClick={handleClick}>{wording}</button>
);

CreateMarkdownButton.propTypes = {
  handleClick: PropTypes.func,
  wording: PropTypes.string,
};

CreateMarkdownButton.defaultProps = {
  handleClick: noop,
  wording: "",
};

export default CreateMarkdownButton;
