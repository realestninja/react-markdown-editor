import React, { useRef } from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import { HiddenInput } from "./styles/ReadFromFileButton.styles";

const allowances = {
  markdown: ".md",
  html: "text/html",
  default: null,
};

const ReadFromFileButton = ({ callback, allowedFileType, wording, className }) => {
  const inputRef = useRef();

  const handleFile = async (val) => {
    const fileContent = await val.text();
    callback(fileContent);
    inputRef.current.value = null;
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {wording}
      </button>
      <HiddenInput
        type="file"
        ref={inputRef}
        accept={allowances[allowedFileType]}
        onChange={e => handleFile(e.target.files[0])}
      />
    </>
  );
};

ReadFromFileButton.propTypes = {
  allowedFileType: PropTypes.string,
  callback: PropTypes.func,
  wording: PropTypes.string,
  className: PropTypes.string,
};

ReadFromFileButton.defaultProps = {
  allowedFileType: "default",
  callback: noop,
  wording: "Choose file",
  className: null,
};

export default ReadFromFileButton;