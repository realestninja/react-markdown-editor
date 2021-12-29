import React, { useState } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";

import MarkdownOutput from "./MarkdownOutput";
import MarkdownEditor from "./MarkdownEditor";
import FileReader from "../form/FileReader";

const MarkdownLogic = () => {
  const [editorContent, updateContent] = useState("");

  const nhm = new NodeHtmlMarkdown();

  const handleNewHtml = (html) => {
    updateContent(nhm.translate(html));
  };

  return (
    <>
      <FileReader callback={handleNewHtml} allowedFileType="html" />
      <FileReader callback={updateContent} allowedFileType="markdown" />
      <MarkdownEditor textareaHandler={updateContent} content={editorContent} />
      <MarkdownOutput rawContent={editorContent} />
    </>
  );
};

export default MarkdownLogic;
