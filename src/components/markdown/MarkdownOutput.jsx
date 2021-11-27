import ReactMarkdown from "react-markdown";
import React from "react";
import PropTypes from "prop-types";

import { Output } from "./styles/MarkdownOutput.styles";

const MarkdownOutput = ({ rawContent, className }) => (
  <Output className={className}>
    <ReactMarkdown>
      {rawContent}
    </ReactMarkdown>
  </Output>
);

MarkdownOutput.propTypes = {
  rawContent: PropTypes.string,
  className: PropTypes.string,
};

MarkdownOutput.defaultProps = {
  rawContent: null,
  className: "",
};

export default MarkdownOutput;
