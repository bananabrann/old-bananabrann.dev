import React from "react";

export default function ContentBlock({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id ?? ""} className="max-w-4xl mx-auto px-6 py-2">
      {children}
    </div>
  );
}
