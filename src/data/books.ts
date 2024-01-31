import { Navigations } from "@site/src";
import DownloadSvg from "@site/src/assets/icons/DownloadSvg";
import JavascriptBookOneImg from "@site/src/assets/icons/JavascriptBookOneImg";
import JavascriptRefactorImg from "@site/src/assets/icons/JavascriptRefactorImg";
export const JavaScriptBooks: Navigations = [
  {
    title: "JavaScript高级程序设计",
    smallTitle:
      "《JavaScript高级程序设计》是一本由经验丰富的前端工程师Nicholas C. Zakas编写的经典指南，全面涵盖JavaScript语言的各个方面，包括语法、DOM操作、性能优化等，通过实际示例和案例帮助读者深入理解并应用于实际开发。",
    url: "#",
    icon: JavascriptBookOneImg,
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
  {
    title: "重构改善既有代码的设计",
    smallTitle:
      "重构是指通过修改代码的内部结构，而不改变其外部行为，来改善代码的质量、可维护性和可读性的过程。在重构的过程中，开发者调整代码的结构、命名、模块化，以使其更加清晰、灵活和易于理解。Martin Fowler的《重构：改善既有代码的设计》是一本经典的关于重构的著作",
    url: "#",
    icon: JavascriptRefactorImg,
    contextMenu: [
      {
        title: "下载",
        action: "download",
        url: require("@site/static/books/javascript1.pdf").default,
        icon: DownloadSvg,
        meta: {
          filename: "重构.pdf",
        },
      },
    ],
  },
];
