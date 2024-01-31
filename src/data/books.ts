import { Navigations } from "@site/src";
import JavaScriptSvg from "@site/src/assets/icons/JavaScriptSvg";
import DownloadSvg from "@site/src/assets/icons/DownloadSvg";
export const JavaScriptBooks: Navigations = [
  {
    title: "JavaScript高级程序设计",
    smallTitle:
      "《JavaScript高级程序设计》是一本由经验丰富的前端工程师Nicholas C. Zakas编写的经典指南，全面涵盖JavaScript语言的各个方面，包括语法、DOM操作、性能优化等，通过实际示例和案例帮助读者深入理解并应用于实际开发。",
    url: false,
    icon: JavaScriptSvg,
    contextMenu: [
      {
        title: "下载",
        action: "download",
        url: require("@site/static/books/javascript1.pdf").default,
        icon: DownloadSvg,
        meta: {
          filename: "JavaScript高级程序设计.pdf",
        },
      },
    ],
  },
];
