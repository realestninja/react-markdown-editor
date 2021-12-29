import React, { useState } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";

import MarkdownOutput from "./MarkdownOutput";
import MarkdownEditor from "./MarkdownEditor";

const MarkdownLogic = () => {
  const [editorContent, updateContent] = useState("");

  const nhm = new NodeHtmlMarkdown();

  const dummyHtml = "<p>hello world<a class=\"image-popup\" href=\"https://nikhil.realest.ninja/hello.jpg\">hi</a></p>";

  const handleNewHtml = () => {
    updateContent(nhm.translate(dummyHtml));
  };

  return (
    <>
      <button type="button" onClick={handleNewHtml}>test</button>
      <MarkdownEditor textareaHandler={updateContent} content={editorContent} />
      <MarkdownOutput rawContent={editorContent} />
    </>
  );
};

export default MarkdownLogic;
