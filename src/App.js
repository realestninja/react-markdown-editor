import "./App.css";

import { H1 } from "./components/typography/styles/Typography.styles";
import { PageWrapper } from "./styles/App.styles";
import MarkdownLogic from "./components/markdown/MarkdownLogic";

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <H1>React Markdown Editor</H1>
        <MarkdownLogic />
      </PageWrapper>
    </div>
  );
}

export default App;
