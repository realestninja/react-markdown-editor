import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import MarkdownOutput from "../components/markdown/MarkdownOutput";
import Textarea from "../components/form/Textarea";
import { H1 } from "../components/typography/styles/Typography.styles";
import { PageWrapper, ContentWrapper } from "./styles/AppController.styles";

const AppController = () => {
  const [inputContent, updateContent] = useState("");

  const outputContent = <ReactMarkdown>{inputContent}</ReactMarkdown>;

  return (
    <PageWrapper>
      <H1>React Markdown Editor</H1>
      <ContentWrapper>
        <Textarea textareaHandler={updateContent} />
        <MarkdownOutput>{outputContent}</MarkdownOutput>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default AppController;
