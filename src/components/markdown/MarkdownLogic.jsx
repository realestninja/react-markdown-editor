import React, { useState } from "react";
import { NodeHtmlMarkdown } from "node-html-markdown";

import MarkdownOutput from "./MarkdownOutput";
import MarkdownEditor from "./MarkdownEditor";

const MarkdownLogic = () => {
  const [editorContent, updateContent] = useState("");
  /*
   * const [htmlContent, setHtmlContent] = useState("");
   */

  const nhm = new NodeHtmlMarkdown();
  const dummyHtml = "<p>hello world<a class=\"image-popup\" href=\"https://nikhil.realest.ninja/hello.jpg\">hi</a></p>";
  console.log("nhm:", nhm.translate(dummyHtml));

  return (
    <>
      <MarkdownEditor textareaHandler={updateContent} />
      <MarkdownOutput rawContent={editorContent} />
    </>
  );
};

export default MarkdownLogic;
