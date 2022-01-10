import "./App.css";

import { H1 } from "./components/typography/styles/Typography.styles";
import { PageWrapper } from "./styles/App.styles";
import MarkdownLogic from "./components/markdown/MarkdownLogic";

const customMarkdown = [
  {
    validate(params) {
      return params.trim().match(/^image/);
    },

    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
      // opening tag
        return "<div class='md-image'>\n";
      }
      // closing tag
      return "</div>\n";
    },
  },
  {
    validate(params) {
      return params.trim().match(/^gallery/);
    },

    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
      // opening tag
        return "<div class='md-gallery'>\n";
      }
      // closing tag
      return "</div>\n";
    },
  },
];

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <H1>React Markdown Editor</H1>
        <MarkdownLogic customMarkdown={customMarkdown} />
      </PageWrapper>
    </div>
  );
}

export default App;
