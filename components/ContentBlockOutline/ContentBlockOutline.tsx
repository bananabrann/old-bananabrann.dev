import React from "react";
import styles from "./ContentBlockOutline.module.scss";

export default function ContentBlockOutline({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return(
    <div className="ContentBlockOutline flex flex-col items-center">
      <h2 className="w-full text-center -mb-6" >{title}</h2>
      <div className={`${styles.childrencontainer}`}>
        {children}
      </div>
    </div>
  )
}