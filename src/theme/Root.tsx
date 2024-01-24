import React, { MouseEvent, useEffect } from "react";

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
      let emoji = null;
      const tip = document.querySelector(".custom-feedback .tips");
      const icons = document.querySelector(".custom-feedback .icons");

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

        if (!emoji) {
          tip.innerHTML = "请选择一种表情";
          return;
        }

        console.log(email.value, content.value, emoji);
      });

      icons.addEventListener("click", (e: any) => {
        Array.from(icons.children).map((item) => {
          item.classList.remove("icon-active");
        });
        if (e.target instanceof HTMLImageElement) {
          e.target.classList.add("icon-active");
          emoji = e.target.dataset.emoji;
        }
      });

      window.addEventListener("click", (event: any) => {
        if (!feedback.contains(event.target)) {
          feedback.classList.remove("active");
          email.value = "";
          content.value = "";
          emoji = null;
          Array.from(icons.children).map((item) => {
            item.classList.remove("icon-active");
          });
        }
      });
    }
  }, []);
  return <>{children}</>;
}
