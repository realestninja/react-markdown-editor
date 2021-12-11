import AppController from "./controllers/AppController";
import "./App.css";

import { H1 } from "./components/typography/styles/Typography.styles";
import { PageWrapper, ContentWrapper } from "./styles/App.styles";

function App() {
  return (
    <div className="App">
      <H1>React Markdown Editor</H1>
      <PageWrapper>
        <ContentWrapper>
          <AppController />
        </ContentWrapper>
      </PageWrapper>
    </div>
  );
}

export default App;
