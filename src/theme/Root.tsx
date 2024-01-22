import React, { useEffect } from "react";

// 默认实现，你可以自定义
export default function Root({ children }) {
  useEffect(() => {
    if (document) {
      const feedback = document.querySelector(".custom-feedback");

      // TODO
      if (!feedback) {
        return;
      }

      feedback.addEventListener("click", () => {
        feedback.classList.add("active");
      });

      window.addEventListener("click", (event: any) => {
        if (!feedback.contains(event.target)) {
          feedback.classList.remove("active");
        }
      });
    }
  }, []);
  return <>{children}</>;
}
