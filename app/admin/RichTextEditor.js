import { Editor, EditorTools } from "@progress/kendo-react-editor";
import { useRef, useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import style from "./richtexteditor.module.css";
function RichText() {
  const submitref = useRef(null);
  const [richtext, setrichtext] = useState();
  const [file, setFile] = useState();
  const [title,setTitle] = useState();

  const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    ForeColor,
    BackColor,
    CleanFormatting,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    NumberedList,
    BulletedList,
    Undo,
    Redo,
    FontSize,

    FormatBlock,
  } = EditorTools;

  const tools = [
    [Bold, Italic, Underline, Strikethrough],
    [Subscript, Superscript],
    ForeColor,
    BackColor,
    [CleanFormatting],
    [AlignLeft, AlignCenter, AlignRight, AlignJustify],
    [Indent, Outdent],
    [OrderedList, UnorderedList],
    [NumberedList, BulletedList],
    FontSize,

    FormatBlock,

    [Undo, Redo],
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('title',title)
    formData.append('body',richtext)
    formData.append('file',file)

    console.log(formData)

    const promise = await fetch("http://localhost:3000/api/setblog", {
      method: 'POST',
      
      body:formData
    })

    const response = await promise.json();
    console.log(response);
    
  };


  return (
    <div>
      <div className={style.main}>
        <div className={style.createblog}> Create blog</div>
        <form onSubmit={handleSubmit} className={style.formstyle}>
          <div className={style.title}>
            <label for="title">Title</label>
            <input
              className={style.titleinput}
              id="title"
              type="text"
              name="title"
              onChange={(e)=>setTitle(e.target.value)}
            ></input>
          </div>

          <div className={style.bodytitle}>Body</div>
          <Editor
            defaultContent={richtext}
            tools={tools}
            onChange={(e) => setrichtext(e.html)}
            // contentStyle={{background:"red", color:"yellow"}}
          />

          <div className={style.file}>
            <button type="button"
              onClick={() => submitref.current.click()}
              className={style.choosephoto}
            >
              Choose Photo
            </button>
            <input
              id="files"
              type="file"
              accept="image/png,image/jpeg"
              style={{ display: "none" }}
              ref={submitref}
              onChange={(e)=>setFile(e.target.files[0])}
            ></input>
          </div>

          <input className={style.submit} type="submit" value="Publish"></input>
        </form>
      </div>
    </div>
  );
}
export default RichText;
