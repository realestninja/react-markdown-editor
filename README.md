# React Markdown Editor

A WYSIWYG markdown editor that can save and read content in either markdown or html format.
Custom file handlers can be added in order to read from JSON or other file structures.

## Preview as of January 1st 2022

![Preview Image](./readme_content/preview.png "React Markdown Editor")

## Custom Markdown
Custom markdown can be used by passing an array of objects that holds the transformation.
Custom markdown uses the [markdown-it-container](https://github.com/markdown-it/markdown-it-container) library.

### Example:
```
const customMarkdownSetup = [
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
```


## Custom import buttons

Custom import buttons can be passed into the component through an array of objects. Each button needs an Object with a handler for the file content.

### Example of a file content handler
```
const customFileContentHandler = (fileContent) => {
  const parsed = JSON.parse(fileContent);
  return parsed.content;
};
```

### Example of array of custom import buttons
```
const dummyCustomImportButtons = [
  {
    wording: "Import from blog file",
    customFileContentHandler,
    allowedFileType: "json",
  },
];
```
