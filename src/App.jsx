import "./styles.css";
import { ChildArea } from "./ChildArea";
import { useState } from "react";

export const App = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickDisplay = () => setOpen(!open);

  return (
    <div className="App">
      <input type="text" onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickDisplay}>表示</button>
      <br />
      <br />
      <ChildArea open={open} />
    </div>
  );
};
