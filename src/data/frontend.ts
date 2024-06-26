import { Navigations } from "@site/src";
import {
  HtmlSvg,
  CssSvg,
  JavaScriptSvg,
  TypeScriptSvg,
  VueSvg,
  ReactSvg,
  AngularSvg,
  NuxtSvg,
  NextSvg,
  SvelteSvg,
  UmiJSSvg,
  RemixSvg,
  MobxSvg,
  LodashSvg,
  ImmutableSvg,
  RxSvg,
  MomentSvg,
  DaySvg,
  GSAPSvg,
  HttpSvg,
  AxiosSvg,
  JQuerySvg,
  SWRSvg,
  JestSvg,
  CypressSvg,
  PlaywrightSvg,
  MochaSvg,
  ChaiSvg,
  SassSvg,
  LessSvg,
  TailwindCssSvg,
  PurgeCssSvg,
  ViteSvg,
  WebpackSvg,
  BabelSvg,
  GulpSvg,
  RollupSvg,
  ChartSvg,
  D3Svg,
  EChartsSvg,
  AntVSvg,
  ThreeSvg,
  ReactNativeSvg,
  FlutterSvg,
  UniAppSvg,
  WechatMiniSvg,
  WebRTCSvg,
  GraphQLSvg,
  WebAssemblySvg,
  SocketIoSvg,
} from "@site/src/assets/icons";

export const ThreeMusketeers: Navigations = [
  {
    title: "HTML",
    smallTitle:
      "HTML是一种基础技术，常与CSS、JavaScript一起被众多网站用于设计网页、网页应用程序以及移动应用程序的用户界面。",
    icon: HtmlSvg,
    officialWebsiteUrl: "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
  },
  {
    title: "CSS",
    smallTitle:
      "CSS，即层叠样式表（Cascading Index Sheets），是一种用于描述HTML或XML（包括SVG或XHTML等XML方言）文档展示样式的语言。",
    icon: CssSvg,
    officialWebsiteUrl: "https://developer.mozilla.org/zh-CN/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    smallTitle:
      "JavaScript是一门基于原型和头等函数的多范式高级解释型编程语言，它支持面向对象程序设计、指令式编程和函数式编程",
    url: "javascript-docs/",
    icon: JavaScriptSvg,
  },
  {
    title: "TypeScript",
    smallTitle:
      "TypeScript是由微软进行开发和维护的一种开源的编程语言。TypeScript是JavaScript的严格语法超集，提供了可选的静态类型检查。",
    url: "typescript-docs/",
    icon: TypeScriptSvg,
  },
];
/**
 * javascript框架
 */
export const JavaScriptFrame: Navigations = [
  {
    title: "Vue.js",
    smallTitle:
      "Vue是一个用于创建用户界面的开源MVVM前端JavaScript框架，也是一个创建单页应用的Web应用框架。",
    icon: VueSvg,
  },
  {
    title: "React.js",
    smallTitle:
      "React是一个自由及开放源代码的前端JavaScript工具库， 用于基于UI组件构建用户界面",
    icon: ReactSvg,
  },
  {
    title: "Angular",
    smallTitle:
      "Angular是一个用于构建Web应用程序的JavaScript框架。它采用了MVC架构模式，并提供了许多工具和功能，用于开发可维护、可扩展和高效的前端应用程序",
    icon: AngularSvg,
  },
  {
    title: "Nuxt.js",
    smallTitle:
      "Nuxt.js 是一个基于 Vue.js 的通用应用框架，用于构建服务器渲染的Vue.js应用。它简化了 Vue.js 应用的开发过程，特别是在构建单页应用（SPA）或静态站点时",
    icon: NuxtSvg,
  },
  {
    title: "Next.js",
    smallTitle:
      "Next.js 是一个用于构建 React 应用程序的框架，它简化了 React 应用的开发过程，同时提供了服务器渲染和静态生成等功能",
    icon: NextSvg,
  },
  {
    title: "Svelte.js",
    smallTitle:
      "Svelte.js 是一个用于构建用户界面的现代 JavaScript 框架。与传统的前端框架不同，Svelte 在构建时将组件转换为高效、优化的原生 JavaScript，而不是在运行时进行。",
    icon: SvelteSvg,
  },
  {
    title: "UmiJS",
    smallTitle:
      "UmiJS 是一个基于 React 的前端应用开发框架，提供了一整套开发、构建和部署工具，旨在帮助开发者更快速、更高效地构建现代化的前端应用。它构建于 React、Webpack、Babel 等技术栈之上，并具有很强的插件化和可配置性。",
    icon: UmiJSSvg,
  },
  {
    title: "Remix",
    smallTitle:
      "Remix 是一个面向 React 开发的现代 web 开发框架，它旨在提供更好的开发体验、更灵活的路由管理和更高性能的应用程序。Remix 提供了一种新的前端开发方式，支持数据驱动和增量式静态生成等特性，以提升 web 应用的性能和用户体验。",
    icon: RemixSvg,
  },
  {
    title: "Mobx",
    smallTitle:
      "MobX（也称为mobx-state-tree）是一个用于状态管理的 JavaScript 库，主要用于构建 React 应用程序。它提供了一种简单而强大的方式来管理应用程序中的状态，并自动更新相关的 UI 组件。",
    icon: MobxSvg,
  },
];

/**
 * javascript 函数库
 */
export const JavaScriptFunctionLibrary: Navigations = [
  {
    title: "Lodash.js",
    smallTitle: "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
    icon: LodashSvg,
  },
  {
    title: "Immutable.js",
    smallTitle:
      "Immutable.js是由Facebook开发的JavaScript库，专注于提供不可变（Immutable）的数据结构。它鼓励使用不可变的数据模型，其中数据一旦创建就不能被修改，而是通过创建新的不可变实例来表示变化。这有助于提高应用程序的状态管理、可维护性和性能。",
    icon: ImmutableSvg,
  },
  {
    title: "Rx.js",
    smallTitle:
      "RxJS（Reactive Extensions for JavaScript）是一个用于处理异步和事件驱动编程的JavaScript库。它是响应式编程的一部分，提供了一套丰富的工具和操作符，用于处理事件流和异步操作。",
    icon: RxSvg,
  },
  {
    title: "Moment.js",
    smallTitle:
      "Moment.js是一个处理日期和时间的库，提供了丰富的日期格式化、解析、比较等功能，使得在JavaScript中操作日期变得更加简便。",
    icon: MomentSvg,
  },
  {
    title: "Day.js",
    smallTitle:
      "Day.js 是一个轻量级的 JavaScript 日期库，用于处理日期和时间。它的设计目标是替代 Moment.js，提供相似的 API 和功能，但更小巧、性能更好，并且在维护上更活跃。",
    icon: DaySvg,
  },
  {
    title: "GSAP",
    smallTitle:
      "GSAP（GreenSock Animation Platform）是一个强大而灵活的JavaScript动画库，用于在网页上创建高性能的动画效果。GSAP提供了丰富的功能和灵活的API，使开发者能够轻松创建流畅、复杂的动画，包括缓动、时间轴控制、CSS属性动画等。",
    icon: GSAPSvg,
  },
];

/**
 * 网络请求技术
 */
export const HttpRequest: Navigations = [
  {
    title: "HTTP",
    smallTitle:
      "超文本传输协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。HTTP 遵循经典的客户端—服务端模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。HTTP 是无状态协议，这意味着服务器不会在两个请求之间保留任何数据（状态）。",
    icon: HttpSvg,
  },
  {
    title: "Axios",
    smallTitle:
      "Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。",
    icon: AxiosSvg,
  },
  {
    title: "JQuery-Http",
    smallTitle:
      "在 jQuery 中，Ajax 操作（即异步 JavaScript 和 XML）提供了一组方便的方法，用于通过 HTTP 请求进行数据交换。jQuery 提供了 $.ajax() 方法和一些简化的快捷方法，使得执行 Ajax 操作变得更加简单。",
    icon: JQuerySvg,
  },
  {
    title: "SWR",
    smallTitle:
      "SWR 这个名字来自于 stale-while-revalidate：一种由 HTTP RFC 5861 推广的 HTTP 缓存失效策略。这种策略首先从缓存中返回数据（过期的），同时发送 fetch 请求（重新验证），最后得到最新数据。",
    icon: SWRSvg,
  },
];

/**
 * JavaScript测试框架
 */
export const JavaScriptTestFrame: Navigations = [
  {
    title: "Jest",
    smallTitle: "Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快",
    icon: JestSvg,
  },
  {
    title: "Cypress",
    smallTitle:
      "专注于端到端测试的框架，提供实时重新加载、可视化调试、可录制的交互式测试等功能。适用于模拟用户行为。",
    icon: CypressSvg,
  },
  {
    title: "Playwright ",
    smallTitle:
      "Playwright 是一款由 Microsoft 开发的用于自动化浏览器操作的开源工具。它提供了一套强大的 API，支持多种浏览器（Chromium、Firefox、WebKit）和多种编程语言（JavaScript、TypeScript、Python、C#）。Playwright 的主要用途包括自动化测试、屏幕截图、爬虫和执行浏览器操作的自动化任务。",
    icon: PlaywrightSvg,
  },
  {
    title: "Mocha",
    smallTitle:
      "Mocha 是一个流行的 JavaScript 测试框架，用于编写和执行测试。它支持多种测试类型，包括单元测试、集成测试和端到端测试。Mocha 的设计注重简洁、灵活，并且易于使用，因此成为许多 JavaScript 项目中的首选测试框架。",
    icon: MochaSvg,
  },
  {
    title: "Chai",
    smallTitle:
      "Chai 是一个 JavaScript 断言库，用于编写测试时进行断言。它可以与各种测试框架（如Mocha、Jasmine、Jest等）一起使用，并提供多种断言风格，包括 BDD（行为驱动开发）和 TDD（测试驱动开发）风格。",
    icon: ChaiSvg,
  },
];

/**
 *  CSS 框架
 */
export const CSSFrame: Navigations = [
  {
    title: "Sass",
    smallTitle: "Sass 是世界上最成熟、最稳定、最强大的专业级CSS扩展语言 。",
    icon: SassSvg,
  },
  {
    title: "Less",
    smallTitle:
      "LESS 为 CSS 赋予了动态语言的特性，如变量、继承、运算、函数。LESS 既可以在客户端上运行 (支持 IE 6+、Webkit、Firefox)，也可以借助 Node.js 或者 Rhino 在服务端运行。",
    icon: LessSvg,
  },
  {
    title: "Tailwind CSS",
    smallTitle:
      "Tailwind CSS 是一个用于快速UI开发的实用工具集 CSS 框架。与 Bootstrap 、Foundation 不同，Tailwind CSS 没有内置的 UI 组件。完全需要开发者根据自身情况来定制设计。",
    icon: TailwindCssSvg,
  },
  {
    title: "PurgeCSS",
    smallTitle:
      "PurgeCSS 是一个用来删除未使用的 CSS 代码的工具，能够减小 CSS 文件的体积。例如可以用来减小 Bootstrap 等前端框架的文件体积，提升加载速度。",
    icon: PurgeCssSvg,
  },
  {
    title: "CLSX",
    smallTitle:
      "clsx 是一个用于生成动态 CSS 类名的 JavaScript 工具库。它提供了一种简便的方式来根据条件和参数动态生成 CSS 类名，特别适用于 React 或其它前端框架中动态处理类名的场景。",
    icon: "CLSX",
  },
];

/**
 * 前端开发构建工具
 */
export const FrontendDevelopmentBuildTools: Navigations = [
  {
    title: "Vite",
    smallTitle:
      "现代化的前端开发构建工具，专注于提供快速的开发体验。支持原生 ES 模块构建、快速的开发服务器和内置插件系统。",
    icon: ViteSvg,
  },
  {
    title: "Webpack",
    smallTitle:
      "强大的模块打包工具，支持代码分割、懒加载、热模块替换（HMR）等功能。广泛用于大型应用程序的构建。",
    icon: WebpackSvg,
  },
  {
    title: "Babel",
    smallTitle:
      "JavaScript 编译器，用于将新版本的 JavaScript 转换为向后兼容的版本。支持许多插件和预设，使得开发者可以灵活地配置和定制。",
    icon: BabelSvg,
  },
  {
    title: "Gulp",
    smallTitle:
      "Gulp 是一个基于 Node.js 构建的前端自动化工具，用于简化和优化开发工作流程。它可以自动执行一系列任务，例如文件压缩、合并、编译、浏览器同步等，从而提高开发效率。",
    icon: GulpSvg,
  },
  {
    title: "Rollup",
    smallTitle:
      "Rollup 是一个 JavaScript 模块打包器，主要用于构建现代的 JavaScript 应用和库。它的目标是将你的代码打包成更小、更高效的输出，以便在浏览器中更快地加载。",
    icon: RollupSvg,
  },
];

/**
 * 前端图表工具和库
 */
export const ChartTools: Navigations = [
  {
    title: "Chart.js",
    smallTitle:
      "Chart.js 是一个用于创建简单而灵活的图表的 JavaScript 库。它使用 HTML5 Canvas 元素来绘制图表，使得开发者可以轻松地在网页上实现各种图表类型，包括线图、柱状图、饼图等。",
    icon: ChartSvg,
  },
  {
    title: "D3.js",
    smallTitle:
      "D3.js（Data-Driven Documents）是一个用于创建交互式、动态数据可视化的JavaScript库。它允许开发者通过使用HTML、SVG和CSS等标准的Web技术，将数据映射到DOM（文档对象模型）上，从而创建各种复杂的、灵活的数据可视化。",
    icon: D3Svg,
  },
  {
    title: "ECharts",
    smallTitle:
      "ECharts（Enterprise Charts）是一个由百度开发的开源JavaScript图表库，用于创建各种交互式和可视化的图表。ECharts支持多种图表类型，包括折线图、柱状图、饼图、雷达图、地图等，以及一些复杂的图表，如热力图、力导向图等。",
    icon: EChartsSvg,
  },
  {
    title: "AntV",
    smallTitle:
      "AntV 是一个基于 G2、G6、L7 等可视化引擎的数据可视化解决方案，由蚂蚁金服开发和维护。AntV 提供了一系列强大的图表库和工具，以帮助开发者快速构建丰富、交互式的数据可视化应用。",
    icon: AntVSvg,
  },
];

/**
 * WebGL JavaScript库
 */
export const WebGLJavaScriptLibrary: Navigations = [
  {
    title: "Three.js",
    smallTitle:
      "Three.js 是一个用于创建和渲染 3D 图形的开源 JavaScript 库。它建立在 WebGL 技术之上，简化了在 Web 浏览器中实现复杂 3D 图形的过程。Three.js 提供了丰富的功能和 API，使开发者能够轻松地构建交互式的 3D 场景、模型和动画。",
    icon: ThreeSvg,
  },
];

/**
 * 移动端框架
 */
export const MobileEndFrame: Navigations = [
  {
    title: "React Native",
    smallTitle:
      "React Native 是由 Facebook 推出的一款用于构建跨平台移动应用的开源框架。它基于 React（用于构建用户界面的JavaScript库），并允许开发者使用相同的代码库创建同时运行在 iOS 和 Android 平台上的原生应用。",
    icon: ReactNativeSvg,
  },
  {
    title: "Flutter",
    smallTitle:
      "Flutter 是由 Google 推出的一款开源框架，用于构建跨平台移动应用、桌面应用和 Web 应用。Flutter 使用 Dart 编程语言，并采用自己的渲染引擎，具有一些独特的特点和优势。",
    icon: FlutterSvg,
  },
  {
    title: "Uni-app",
    smallTitle:
      "Uni-app（Universal Application）是一个基于 Vue.js 的跨平台开发框架，可以用于快速构建同时运行在多个平台（包括iOS、Android、Web、小程序等）的应用程序。",
    icon: UniAppSvg,
  },
];

/**
 * 探索前端技术
 */
export const ExploreFrontendTechnologies: Navigations = [
  {
    title: "WebRTC",
    smallTitle:
      "WebRTC（Web Real-Time Communication）是一项支持浏览器之间实时通信的技术。它允许开发者构建实时音视频通信应用，如视频会议、实时聊天等。",
    icon: WebRTCSvg,
  },
  {
    title: "GraphQL",
    smallTitle:
      "GraphQL 是一种用于 API 查询语言的规范，由 Facebook 于2012年开发并于2015年对外公开。GraphQL 提供了一种更高效、灵活和强大的方式来获取和提交数据，使得客户端能够精确地请求需要的数据而不受服务器的限制。",
    icon: GraphQLSvg,
  },
  {
    title: "WebAssembly",
    smallTitle:
      "WebAssembly（简称Wasm）是一种开放标准，旨在为Web浏览器提供一种可移植、高性能的二进制格式。它是一种可供浏览器中执行的低级别的虚拟机（VM）字节码，可以在现代Web浏览器中运行，并且不依赖于特定的编程语言。",
    icon: WebAssemblySvg,
  },
];

/**
 * WebSocket实时通讯框架
 */
export const RealTimeCommunicationFrame: Navigations = [
  {
    title: "Socket.io",
    smallTitle:
      "Socket.io 是一个流行的 JavaScript 库，用于实现实时、双向通信。它可以在浏览器和服务器之间建立持久的连接，支持 WebSocket 协议以及其他实时通信协议，如轮询。Socket.io 主要用于构建实时的 Web 应用程序，如聊天应用、实时协作工具等",
    icon: SocketIoSvg,
  },
];
