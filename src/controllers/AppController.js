import React, { useState } from "react";

import MarkdownOutput from "../components/markdown/MarkdownOutput";
import MarkdownEditor from "../components/markdown/MarkdownEditor";

const AppController = () => {
  const [editorContent, updateContent] = useState("");

  return (
    <>
      <MarkdownEditor textareaHandler={updateContent} />
      <MarkdownOutput rawContent={editorContent} />
    </>
  );
};

export default AppController;
