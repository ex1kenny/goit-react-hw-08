import { useEffect } from "react";
import { useState } from "react";
import css from "./SpinLoader.module.css";
export default function SpinLoader() {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
      setText("Upsss! something wrong!!");
    }, 3000);
  });

  return (
    <div className={css.container}>
      {showImg ? <img src="./sp1.svg" alt="Loader" /> : <h3>{text}</h3>}
    </div>
  );
}
