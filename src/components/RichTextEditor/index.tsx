import dynamic from "next/dynamic";
import { useEffect } from "react";
import useStyles from "./styles";

export const editorModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
export const editorFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const QuillEditor = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const RichTextEditor = ({
  setValue,
  name,
  defaultValue,
  modules = editorModules,
  formats = editorFormats,
  ...props
}: any) => {
  const classes = useStyles();

  const handleChange = (e: any) => {
    setValue(name, e);
  };

  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  return (
    <QuillEditor
      className={classes.container}
      modules={modules}
      formats={formats}
      {...props}
      onChange={handleChange}
      defaultValue={defaultValue}
    />
  );
};

export default RichTextEditor;
