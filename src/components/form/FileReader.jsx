import React, { useRef } from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

const allowances = {
  markdown: ".md",
  html: "text/html",
  default: null,
};

const FileReader = ({ callback, allowedFileType }) => {
  const inputRef = useRef();

  const handleFile = async (val) => {
    const fileContent = await val.text();
    callback(fileContent);
    inputRef.current.value = null;
  };

  return (
    <input
      type="file"
      ref={inputRef}
      accept={allowances[allowedFileType]}
      onChange={e => handleFile(e.target.files[0])}
    />
  );
};

FileReader.propTypes = {
  allowedFileType: PropTypes.string,
  callback: PropTypes.func,
};

FileReader.defaultProps = {
  allowedFileType: "default",
  callback: noop,
};

export default FileReader;
