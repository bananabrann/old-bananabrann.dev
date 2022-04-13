import React from "react";
import styles from "./ContentBlockOutline.module.scss";

export default function ContentBlockOutline({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
  return(
    <div id={id} className="ContentBlockOutline flex flex-col items-center">
      <h2 className="w-full text-center -mb-2" >{title}</h2>
      <div className={`${styles.childrencontainer}`}>
        {children}
      </div>
    </div>
  )
}
