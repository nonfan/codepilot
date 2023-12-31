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
import { getRandomElements } from "@site/src/utils";
import HttpSvg from "@site/src/assets/icons/HttpSvg";
import JestSvg from "@site/src/assets/icons/JestSvg";
import PrismaSvg from "@site/src/assets/icons/PrismaSvg";
import TypeORMSvg from "@site/src/assets/icons/TypeORMSvg";
import SequelizeSvg from "@site/src/assets/icons/SequelizeSvg";
import SWRSvg from "@site/src/assets/icons/SWRSvg";
import SassSvg from "@site/src/assets/icons/SassSvg";
import TailwindCssSvg from "@site/src/assets/icons/TailwindCssSvg";
import LessSvg from "@site/src/assets/icons/LessSvg";
import NodeJsSvg from "@site/src/assets/icons/NodeJsSvg";
import PurgeCssSvg from "@site/src/assets/icons/PurgeCssSvg";
import ViteSvg from "@site/src/assets/icons/ViteSvg";
import WebpackSvg from "@site/src/assets/icons/WebpackSvg";
import BabelSvg from "@site/src/assets/icons/BabelSvg";
import CypressSvg from "@site/src/assets/icons/CypressSvg";
import SvelteSvg from "@site/src/assets/icons/SvelteSvg";
import GulpSvg from "@site/src/assets/icons/GulpSvg";
import ChartSvg from "@site/src/assets/icons/ChartSvg";
import D3Svg from "@site/src/assets/icons/D3Svg";
import AntVSvg from "@site/src/assets/icons/AntVSvg";
import EChartsSvg from "@site/src/assets/icons/EChartsSvg";
import ThreeSvg from "@site/src/assets/icons/ThreeSvg";
import DenoSvg from "@site/src/assets/icons/DenoSvg";
import PlaywrightSvg from "@site/src/assets/icons/PlaywrightSvg";

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
  {
    title: "Svelte.js",
    smallTitle:
      "Svelte.js 是一个用于构建用户界面的现代 JavaScript 框架。与传统的前端框架不同，Svelte 在构建时将组件转换为高效、优化的原生 JavaScript，而不是在运行时进行。",
    url: "https://agoodbook.github.io/svelte.js/",
    icon: SvelteSvg,
  },
];

/**
 * 网络请求技术
 */
const HttpRequest: Item[] = [
  {
    title: "HTTP",
    smallTitle:
      "超文本传输协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的客户端—服务端模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是无状态协议，这意味着服务器不会在两个请求之间保留任何数据（状态）。",
    url: "https://agoodbook.github.io/http/",
    icon: HttpSvg,
  },
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
    title: "JQuery-Http",
    smallTitle:
      "在 jQuery 中，Ajax 操作（即异步 JavaScript 和 XML）提供了一组方便的方法，用于通过 HTTP 请求进行数据交换。jQuery 提供了 $.ajax() 方法和一些简化的快捷方法，使得执行 Ajax 操作变得更加简单。",
    url: "https://agoodbook.github.io/jquery-http/",
    icon: JQuerySvg,
  },
  {
    title: "SWR",
    smallTitle:
      "“SWR” 这个名字来自于 stale-while-revalidate：一种由 HTTP RFC 5861 推广的 HTTP 缓存失效策略。这种策略首先从缓存中返回数据（过期的），同时发送 fetch 请求（重新验证），最后得到最新数据。",
    url: "https://agoodbook.github.io/swr/",
    icon: SWRSvg,
  },
];

/**
 * JavaScript测试框架
 */
const JavaScriptTestFrame: Item[] = [
  {
    title: "Jest",
    smallTitle: "Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快",
    url: "https://agoodbook.github.io/jest/",
    icon: JestSvg,
  },
  {
    title: "Cypress",
    smallTitle:
      "专注于端到端测试的框架，提供实时重新加载、可视化调试、可录制的交互式测试等功能。适用于模拟用户行为。",
    url: "https://agoodbook.github.io/cypress/",
    icon: CypressSvg,
  },
  {
    title: "Playwright ",
    smallTitle:
      "Playwright 是一款由 Microsoft 开发的用于自动化浏览器操作的开源工具。它提供了一套强大的 API，支持多种浏览器（Chromium、Firefox、WebKit）和多种编程语言（JavaScript、TypeScript、Python、C#）。Playwright 的主要用途包括自动化测试、屏幕截图、爬虫和执行浏览器操作的自动化任务。",
    url: "https://agoodbook.github.io/playwright/",
    icon: PlaywrightSvg,
  },
];

/**
 *  CSS 框架
 */
const CSSFrame: Item[] = [
  {
    title: "Sass",
    smallTitle: "Sass 是世界上最成熟、最稳定、最强大的专业级CSS扩展语言 。",
    url: "https://agoodbook.github.io/sass/",
    icon: SassSvg,
  },
  {
    title: "Less",
    smallTitle:
      "LESS 为 CSS 赋予了动态语言的特性，如变量、继承、运算、函数。LESS 既可以在客户端上运行 (支持 IE 6+、Webkit、Firefox)，也可以借助 Node.js 或者 Rhino 在服务端运行。",
    url: "https://agoodbook.github.io/less/",
    icon: LessSvg,
  },
  {
    title: "Tailwind CSS",
    smallTitle:
      "Tailwind CSS 是一个用于快速UI开发的实用工具集 CSS 框架。与 Bootstrap 、Foundation 不同，Tailwind CSS 没有内置的 UI 组件。完全需要开发者根据自身情况来定制设计。",
    url: "https://agoodbook.github.io/tailwind-css/",
    icon: TailwindCssSvg,
  },
  {
    title: "PurgeCSS",
    smallTitle:
      "PurgeCSS 是一个用来删除未使用的 CSS 代码的工具，能够减小 CSS 文件的体积。例如可以用来减小 Bootstrap 等前端框架的文件体积，提升加载速度。",
    url: "https://agoodbook.github.io/purgecss/",
    icon: PurgeCssSvg,
  },
];

/**
 * 前端开发构建工具
 */
const FrontendDevelopmentBuildTools: Item[] = [
  {
    title: "Vite",
    smallTitle:
      "现代化的前端开发构建工具，专注于提供快速的开发体验。支持原生 ES 模块构建、快速的开发服务器和内置插件系统。",
    url: "https://agoodbook.github.io/vite/",
    icon: ViteSvg,
  },
  {
    title: "Webpack",
    smallTitle:
      "强大的模块打包工具，支持代码分割、懒加载、热模块替换（HMR）等功能。广泛用于大型应用程序的构建。",
    url: "https://agoodbook.github.io/webpack/",
    icon: WebpackSvg,
  },
  {
    title: "Babel",
    smallTitle:
      "JavaScript 编译器，用于将新版本的 JavaScript 转换为向后兼容的版本。支持许多插件和预设，使得开发者可以灵活地配置和定制。",
    url: "https://agoodbook.github.io/babel/",
    icon: BabelSvg,
  },
  {
    title: "Gulp",
    smallTitle:
      "Gulp 是一个基于 Node.js 构建的前端自动化工具，用于简化和优化开发工作流程。它可以自动执行一系列任务，例如文件压缩、合并、编译、浏览器同步等，从而提高开发效率。",
    url: "https://agoodbook.github.io/gulp/",
    icon: GulpSvg,
  },
];

/**
 * 前端图表工具和库
 */
const ChartTools: Item[] = [
  {
    title: "Chart.js",
    smallTitle:
      "Chart.js 是一个用于创建简单而灵活的图表的 JavaScript 库。它使用 HTML5 Canvas 元素来绘制图表，使得开发者可以轻松地在网页上实现各种图表类型，包括线图、柱状图、饼图等。",
    url: "https://agoodbook.github.io/chart.js/",
    icon: ChartSvg,
  },
  {
    title: "D3.js",
    smallTitle:
      "D3.js（Data-Driven Documents）是一个用于创建交互式、动态数据可视化的JavaScript库。它允许开发者通过使用HTML、SVG和CSS等标准的Web技术，将数据映射到DOM（文档对象模型）上，从而创建各种复杂的、灵活的数据可视化。",
    url: "https://agoodbook.github.io/d3.js/",
    icon: D3Svg,
  },
  {
    title: "ECharts",
    smallTitle:
      "ECharts（Enterprise Charts）是一个由百度开发的开源JavaScript图表库，用于创建各种交互式和可视化的图表。ECharts支持多种图表类型，包括折线图、柱状图、饼图、雷达图、地图等，以及一些复杂的图表，如热力图、力导向图等。",
    url: "https://agoodbook.github.io/echarts.js/",
    icon: EChartsSvg,
  },
  {
    title: "AntV",
    smallTitle:
      "AntV 是一个基于 G2、G6、L7 等可视化引擎的数据可视化解决方案，由蚂蚁金服开发和维护。AntV 提供了一系列强大的图表库和工具，以帮助开发者快速构建丰富、交互式的数据可视化应用。",
    url: "https://agoodbook.github.io/antv.js",
    icon: AntVSvg,
  },
];

/**
 * WebGL JavaScript库
 */
const WebGLJavaScriptLibrary: Item[] = [
  {
    title: "Three.js",
    smallTitle:
      "Three.js 是一个用于创建和渲染 3D 图形的开源 JavaScript 库。它建立在 WebGL 技术之上，简化了在 Web 浏览器中实现复杂 3D 图形的过程。Three.js 提供了丰富的功能和 API，使开发者能够轻松地构建交互式的 3D 场景、模型和动画。",
    url: "https://agoodbook.github.io/three.js",
    icon: ThreeSvg,
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
 * Javascript 运行环境
 */
const JavaScriptRuntimeEnvironment: Item[] = [
  {
    title: "Node.js",
    smallTitle:
      "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，用于构建快速、可扩展的网络应用程序。",
    url: "https://agoodbook.github.io/node.js/",
    icon: NodeJsSvg,
  },
  {
    title: "Deno.js",
    smallTitle:
      "Deno 是一个简单、先进且安全的 JavaScript 和 TypeScript 运行时环境，其基于 V8 引擎并采用 Rust 编程语言构建。",
    url: "https://agoodbook.github.io/deno.js/",
    icon: DenoSvg,
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
    title: "Koa.js",
    smallTitle:
      "koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。",
    url: "https://agoodbook.github.io/koa.js/",
    icon: KoaSvg,
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

/**
 * 数据库ORM框架
 */
const DataBaseORMRFrame: Item[] = [
  {
    title: "Prisma",
    smallTitle:
      "Prisma 是一款现代的、类型安全的数据库访问工具和ORM（对象关系映射）框架，专注于为Node.js和TypeScript应用程序提供数据库访问的便捷和强大的解决方案。",
    url: "https://agoodbook.github.io/prisma/",
    icon: PrismaSvg,
  },
  {
    title: "TypeORM",
    smallTitle:
      "TypeORM 是一款开源的、基于 TypeScript 的对象关系映射（ORM）框架，用于在 Node.js 环境中与关系型数据库进行交互。",
    url: "https://agoodbook.github.io/typeorm/",
    icon: TypeORMSvg,
  },
  {
    title: "Sequelize",
    smallTitle:
      "Sequelize 是一款基于 JavaScript/Node.js 的ORM（对象关系映射）库，用于简化与关系型数据库的交互。",
    url: "https://agoodbook.github.io/sequelize/",
    icon: SequelizeSvg,
  },
];

const AllItem: Item[] = [
  ...ThreeMusketeers,
  ...ReptileTechnology,
  ...JavaScriptFrame,
  ...NodeJSBackendFrame,
  ...SocketFrame,
  ...HttpRequest,
  ...JavaScriptTestFrame,
  ...DataBaseORMRFrame,
  ...CSSFrame,
  ...FrontendDevelopmentBuildTools,
  ...ChartTools,
  ...WebGLJavaScriptLibrary,
  ...JavaScriptRuntimeEnvironment,
];

const RandomItem = getRandomElements(AllItem, 6);

export {
  RandomItem,
  ThreeMusketeers,
  ReptileTechnology,
  JavaScriptFrame,
  NodeJSBackendFrame,
  SocketFrame,
  HttpRequest,
  JavaScriptTestFrame,
  DataBaseORMRFrame,
  CSSFrame,
  FrontendDevelopmentBuildTools,
  ChartTools,
  WebGLJavaScriptLibrary,
  JavaScriptRuntimeEnvironment,
};
