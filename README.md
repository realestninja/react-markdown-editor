# React Markdown Editor

## Custom import buttons

Custom import buttons can be passed into the component through an array of objects. Each button needs an Object with a handler for the file content.

### Example of a file content handler
```
const customFileContentHandler = (fileContent) => {
  const decoded = JSON.parse(fileContent);
  const { content } = decoded;
  console.log("content:", content);
  return content;
};
```

### Example of
const dummyCustomImportButtons = [
  {
    wording: "Import from blog file",
    customFileContentHandler,
    allowedFileType: "json",
  },
];
