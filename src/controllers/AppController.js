import React, { useState } from "react";

import MarkdownOutput from "../components/markdown/MarkdownOutput";
import MarkdownEditor from "../components/markdown/MarkdownEditor";
import { H1 } from "../components/typography/styles/Typography.styles";
import { PageWrapper, ContentWrapper } from "./styles/AppController.styles";

const AppController = () => {
  const [editorContent, updateContent] = useState("");

  return (
    <PageWrapper>
      <H1>React Markdown Editor</H1>
      <ContentWrapper>
        <MarkdownEditor textareaHandler={updateContent} />
        <MarkdownOutput rawContent={editorContent} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default AppController;
