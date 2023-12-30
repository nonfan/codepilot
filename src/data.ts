import React from "react";
import HtmlSvg from "@site/src/assets/icons/HtmlSvg";
import CssSvg from "@site/src/assets/icons/CssSvg";
import JavaScriptSvg from "@site/src/assets/icons/JavaScriptSvg";
import PythonSvg from "@site/src/assets/icons/PythonSvg";
import VueSvg from "@site/src/assets/icons/VueSvg";
import ReactSvg from "@site/src/assets/icons/ReactSvg";
import ExpressSvg from "@site/src/assets/icons/ExpressSvg";
import NestSvg from "@site/src/assets/icons/NestSvg";
import AngularSvg from "@site/src/assets/icons/AngularSvg";
import FastifySvg from "@site/src/assets/icons/FastifySvg";
import KoaSvg from "@site/src/assets/icons/KoaSvg";
import MeteorSvg from "@site/src/assets/icons/MeteorSvg";
import NuxtSvg from "@site/src/assets/icons/NuxtSvg";
import NextSvg from "@site/src/assets/icons/NextSvg";
import TypeScriptSvg from "@site/src/assets/icons/TypeScriptSvg";
import SocketIoSvg from "@site/src/assets/icons/SocketIoSvg";
import AxiosSvg from "@site/src/assets/icons/AxiosSvg";
import JQuerySvg from "@site/src/assets/icons/JQuerySvg";
import FetchSvg from "@site/src/assets/icons/FetchSvg";

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
  {
    title: "TypeScript",
    smallTitle:
      "TypeScript是由微软进行开发和维护的一种开源的编程语言。TypeScript是JavaScript的严格语法超集，提供了可选的静态类型检查。",
    url: "https://agoodbook.github.io/typescript/",
    icon: TypeScriptSvg,
  },
];

/**
 * javascript框架
 */
const JavaScriptFrame: Item[] = [
  {
    title: "Vue.js",
    smallTitle:
      "Vue是一个用于创建用户界面的开源MVVM前端JavaScript框架，也是一个创建单页应用的Web应用框架。",
    url: "https://agoodbook.github.io/vue.js/",
    icon: VueSvg,
  },
  {
    title: "React.js",
    smallTitle:
      "React是一个自由及开放源代码的前端JavaScript工具库， 用于基于UI组件构建用户界面",
    url: "https://agoodbook.github.io/react.js/",
    icon: ReactSvg,
  },
  {
    title: "Angular",
    smallTitle:
      "Angular是一个用于构建Web应用程序的JavaScript框架。它采用了MVC架构模式，并提供了许多工具和功能，用于开发可维护、可扩展和高效的前端应用程序",
    url: "https://agoodbook.github.io/angular/",
    icon: AngularSvg,
  },
  {
    title: "Nuxt.js",
    smallTitle:
      "Nuxt.js 是一个基于 Vue.js 的通用应用框架，用于构建服务器渲染的Vue.js应用。它简化了 Vue.js 应用的开发过程，特别是在构建单页应用（SPA）或静态站点时",
    url: "https://agoodbook.github.io/nuxt.js/",
    icon: NuxtSvg,
  },
  {
    title: "Next.js",
    smallTitle:
      "Next.js 是一个用于构建 React 应用程序的框架，它简化了 React 应用的开发过程，同时提供了服务器渲染和静态生成等功能",
    url: "https://agoodbook.github.io/next.js/",
    icon: NextSvg,
  },
];

/**
 * 网络请求技术
 */
const HttpRequest: Item[] = [
  {
    title: "Axios",
    smallTitle:
      "Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。",
    url: "https://agoodbook.github.io/axios/",
    icon: AxiosSvg,
  },
  {
    title: "Fetch",
    smallTitle:
      "Fetch 是一种用于在浏览器中进行网络请求的现代 API。它提供了一种更强大和灵活的方式来发起 HTTP 请求，替代了传统的 XMLHttpRequest。Fetch API 使用 Promise 对象，使得异步代码更加清晰和易于处理。",
    url: "https://agoodbook.github.io/fetch/",
    icon: FetchSvg,
  },
  {
    title: "JQuery",
    smallTitle:
      "在 jQuery 中，Ajax 操作（即异步 JavaScript 和 XML）提供了一组方便的方法，用于通过 HTTP 请求进行数据交换。jQuery 提供了 $.ajax() 方法和一些简化的快捷方法，使得执行 Ajax 操作变得更加简单。",
    url: "https://agoodbook.github.io/jquery/",
    icon: JQuerySvg,
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

/**
 * NodeJS后端框架
 */
const NodeJSBackendFrame: Item[] = [
  {
    title: "Express.js",
    smallTitle:
      "Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。",
    url: "https://agoodbook.github.io/express.js/",
    icon: ExpressSvg,
  },
  {
    title: "Nest.js",
    smallTitle:
      "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。它利用 JavaScript 的渐进增强的能力，使用并完全支持 TypeScript （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP （面向对象编程）、FP （函数式编程）和 FRP （函数响应式编程）。",
    url: "https://agoodbook.github.io/nest.js/",
    icon: NestSvg,
  },
  {
    title: "Meteor",
    smallTitle:
      "Meteor.js（通常被称为Meteor）是一个全栈JavaScript框架，用于构建现代Web应用程序。它旨在简化Web应用程序的开发流程，提供了一整套工具和库，涵盖了前端和后端开发，以及实时数据传输。",
    url: "https://agoodbook.github.io/meteor/",
    icon: MeteorSvg,
  },
  {
    title: "Koa.js",
    smallTitle:
      "koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。",
    url: "https://agoodbook.github.io/koa.js/",
    icon: KoaSvg,
  },
  {
    title: "Fastify",
    smallTitle:
      "Fastify 是一个轻量、高效的 Node.js Web 框架，专注于提供快速且低开销的服务",
    url: "https://agoodbook.github.io/fastify/",
    icon: FastifySvg,
  },
];

/**
 * Socket框架
 */
const SocketFrame: Item[] = [
  {
    title: "Socket.io",
    smallTitle:
      "Socket.io 是一个流行的 JavaScript 库，用于实现实时、双向通信。它可以在浏览器和服务器之间建立持久的连接，支持 WebSocket 协议以及其他实时通信协议，如轮询。Socket.io 主要用于构建实时的 Web 应用程序，如聊天应用、实时协作工具等",
    url: "https://agoodbook.github.io/socket.io/",
    icon: SocketIoSvg,
  },
];

const AllItem: Item[] = [
  ...ThreeMusketeers,
  ...ReptileTechnology,
  ...JavaScriptFrame,
  ...NodeJSBackendFrame,
  ...SocketFrame,
  ...HttpRequest,
];

export {
  ThreeMusketeers,
  ReptileTechnology,
  JavaScriptFrame,
  NodeJSBackendFrame,
  SocketFrame,
  HttpRequest,
  AllItem,
};
