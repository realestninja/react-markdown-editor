import AppController from "./controllers/AppController";
import "./App.css";

import { H1 } from "./components/typography/styles/Typography.styles";
import { PageWrapper } from "./styles/App.styles";

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <H1>React Markdown Editor</H1>
        <AppController />
      </PageWrapper>
    </div>
  );
}

export default App;
