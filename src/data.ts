import HtmlSvg from "@site/src/assets/icons/HtmlSvg";
import CssSvg from "@site/src/assets/icons/CssSvg";
import JavaScriptSvg from "@site/src/assets/icons/JavaScriptSvg";
import PythonSvg from "@site/src/assets/icons/PythonSvg";
import React from "react";

interface Children {
  title: string;
  icon: React.FC;
  url: string;
}
interface Item {
  title: string;
  smallTitle: string;
  url: string;
  icon: React.FC;
  children?: Children[];
}

/**
 * 前端三剑客
 */
const ThreeMusketeers: Item[] = [
  {
    title: "HTML",
    smallTitle:
      "HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。",
    url: "https://agoodbook.github.io/html/",
    icon: HtmlSvg,
  },
  {
    title: "CSS",
    smallTitle:
      "CSS，即层叠样式表（Cascading Style Sheets），是一种用于描述HTML或XML（包括SVG或XHTML等XML方言）文档展示样式的语言。",
    url: "https://agoodbook.github.io/css/",
    icon: CssSvg,
  },
  {
    title: "JavaScript",
    smallTitle:
      "JavaScript是一门基于原型和头等函数的多范式高级解释型编程语言，它支持面向对象程序设计、指令式编程和函数式编程",
    url: "https://agoodbook.github.io/javascript/",
    icon: JavaScriptSvg,
  },
];

/**
 * 爬虫技术
 */
const ReptileTechnology: Item[] = [
  {
    title: "Python",
    smallTitle:
      "Python是一种通用、高级、解释型编程语言。它并不局限于特定的技术领域，而是被广泛应用于多个领域。",
    url: "https://agoodbook.github.io/python/",
    icon: PythonSvg,
  },
];

const AllItem: Item[] = [...ThreeMusketeers, ...ReptileTechnology];

export { ThreeMusketeers, ReptileTechnology, AllItem };
