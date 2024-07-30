import React from "react";
import { Toaster } from "sonner";

const ToasterProvider = () => {
  return (
    <Toaster
      richColors
      position="top-center"
      toastOptions={{
        style: {
          padding: 8,
        },
        className: "class",
      }}
    />
  );
};

export default ToasterProvider;
