import React, { useEffect } from "react";

// 默认实现，你可以自定义
export default function Root({ children }) {
  useEffect(() => {
    if (document) {
      const feedback = document.querySelector(".custom-feedback");
      const sendBtn = document.querySelector(".custom-feedback .send-btn");
      const email = document.getElementById(
        "feedback-email",
      ) as HTMLInputElement;
      const content = document.getElementById(
        "feedback-content",
      ) as HTMLTextAreaElement;
      const tip = document.querySelector(".custom-feedback .tips");

      // TODO
      if (!feedback) {
        return;
      }

      feedback.addEventListener("click", () => {
        feedback.classList.add("active");
      });

      sendBtn.addEventListener("click", () => {
        if (!email.value.trim()) {
          tip.innerHTML = "请输入邮箱";
          return;
        }

        if (!content.value.trim()) {
          tip.innerHTML = "请输入反馈内容";
          return;
        }

        console.log(email.value, content.value);
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
