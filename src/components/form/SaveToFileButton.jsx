import React, { useRef } from "react";
import PropTypes from "prop-types";

import { HiddenLink } from "./styles/SaveToFileButton.styles";
import { createTimestampedFilename } from "../helper/dateHelper";

const SaveToFileButton = ({ content, wording, fileType }) => {
  const linkRef = useRef();

  const handleSave = () => {
    if (!content.length) return;
    const blob = new Blob([content], { type: "text/plain" });
    const href = URL.createObjectURL(blob);
    linkRef.current.download = `${createTimestampedFilename()}${fileType ? `.${fileType}` : ""}`;
    linkRef.current.href = href;
    linkRef.current.click();
    linkRef.current.removeAttribute("download");
    linkRef.current.href = "#";
  };

  return (
    <>
      <button type="button" onClick={handleSave}>{wording}</button>
      <HiddenLink ref={linkRef}>Download</HiddenLink>
    </>
  );
};

SaveToFileButton.propTypes = {
  content: PropTypes.string,
  wording: PropTypes.string,
  fileType: PropTypes.string,
};

SaveToFileButton.defaultProps = {
  content: "",
  wording: "Save to file",
  fileType: null,
};

export default SaveToFileButton;
