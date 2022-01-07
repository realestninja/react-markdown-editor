import React from "react";
import PropTypes from "prop-types";

import { Output } from "./styles/MarkdownOutput.styles";

const MarkdownOutput = ({ htmlContent, className }) => (
  <Output className={className} dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

MarkdownOutput.propTypes = {
  htmlContent: PropTypes.string,
  className: PropTypes.string,
};

MarkdownOutput.defaultProps = {
  htmlContent: null,
  className: "",
};

export default MarkdownOutput;
