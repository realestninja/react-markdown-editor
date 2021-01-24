import React from "react";
import PropTypes from "prop-types";

import { Output } from "./styles/MarkdownOutput.styles";

const MarkdownOutput = ({ children, className }) => (
  <Output className={className}>{children}</Output>
);

MarkdownOutput.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

MarkdownOutput.defaultProps = {
  children: null,
  className: "",
};

export default MarkdownOutput;
