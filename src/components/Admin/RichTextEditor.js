import React, { useState } from "react";

// CKeditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

// style
import style from "../../sass/RichTextEditor.scss";

const RichtextEditor = (props) => {
  const { ivBody, setIvBody } = props.hocState;

  return (
    <div className="shadow-lg richTextEditorContainer">
      <CKEditor
        editor={Editor}
        data={ivBody}
        onChange={(e, editor) => {
          setIvBody(editor.getData());
        }}
      />
    </div>
  );
};

export default RichtextEditor;
