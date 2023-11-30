import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Reactquill = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ align: ["right", "center",  "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "size",
    "video"
  ];
  return <ReactQuill theme="snow" modules={modules} formats={formats} />;
};

export default Reactquill;
