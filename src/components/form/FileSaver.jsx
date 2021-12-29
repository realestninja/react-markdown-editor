import React, { useRef } from "react";
import PropTypes from "prop-types";
import { HiddenLink } from "./styles/FileSaver.styles";
import { createTimestampedFilename } from "../helper/dateHelper";

const FileSaver = ({ content, wording, fileType }) => {
  const linkRef = useRef();

  const handleSave = () => {
    if (!content.length) return;
    const blob = new Blob([content], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    linkRef.current.download = `${createTimestampedFilename()}${fileType ? `.${fileType}` : ""}`;
    linkRef.current.href = href;
    linkRef.current.click();
  };

  return (
    <>
      <button type="button" onClick={handleSave}>{wording}</button>
      <HiddenLink ref={linkRef}>Download</HiddenLink>
    </>
  );
};

FileSaver.propTypes = {
  content: PropTypes.string,
  wording: PropTypes.string,
  fileType: PropTypes.string,
};

FileSaver.defaultProps = {
  content: "",
  wording: "Save to file",
  fileType: null,
};

export default FileSaver;
