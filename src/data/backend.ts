import {
  ExpressSvg,
  NestSvg,
  FastifySvg,
  MeteorSvg,
  PrismaSvg,
  TypeORMSvg,
  SequelizeSvg,
  NodeJsSvg,
  DenoSvg,
  EggSvg,
  SailsSvg,
  AdonisSvg,
  MongooseSvg,
  NodemailerSvg,
  NodeFetchSvg,
  PassportSvg,
  JsonWebTokenSvg,
  MulterSvg,
  SharpSvg,
} from "@site/src/assets/icons";
import { Navigations } from "@site/src";

/**
 * Javascript 运行环境
 */
export const JavaScriptRuntimeEnvironment: Navigations = [
  {
    title: "Node.js",
    smallTitle:
      "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，用于构建快速、可扩展的网络应用程序。",
    url: "nodejs/",
    icon: NodeJsSvg,
  },
  {
    title: "Deno.js",
    smallTitle:
      "Deno 是一个简单、先进且安全的 JavaScript 和 TypeScript 运行时环境，其基于 V8 引擎并采用 Rust 编程语言构建。",
    url: "denojs/",
    icon: DenoSvg,
  },
];

/**
 * NodeJS后端框架
 */
export const NodeJSBackendFrame: Navigations = [
  {
    title: "Express.js",
    smallTitle:
      "Express 是一个保持最小规模的灵活的 Node.js Web 应用程序开发框架，为 Web 和移动应用程序提供一组强大的功能。",
    icon: ExpressSvg,
  },
  {
    title: "Koa.js",
    smallTitle:
      "koa 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。",
    icon: "Ko",
  },
  {
    title: "Egg.js",
    smallTitle:
      "Egg.js 是一个基于 Node.js 和 Koa 的企业级应用开发框架，旨在提供一套约定和最佳实践，以帮助开发者更快速、更高效地构建可维护和可扩展的应用。Egg.js 继承了 Koa 的中间件机制，同时引入了更多的特性和约定，使得开发者在处理复杂业务逻辑时更加得心应手。",
    icon: EggSvg,
  },
  {
    title: "Nest.js",
    smallTitle:
      "Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。它利用 JavaScript 的渐进增强的能力，使用并完全支持 TypeScript （仍然允许开发者使用纯 JavaScript 进行开发），并结合了 OOP （面向对象编程）、FP （函数式编程）和 FRP （函数响应式编程）。",
    icon: NestSvg,
  },
  {
    title: "Meteor",
    smallTitle:
      "Meteor.js（通常被称为Meteor）是一个全栈JavaScript框架，用于构建现代Web应用程序。它旨在简化Web应用程序的开发流程，提供了一整套工具和库，涵盖了前端和后端开发，以及实时数据传输。",
    icon: MeteorSvg,
  },
  {
    title: "Fastify",
    smallTitle:
      "Fastify 是一个轻量、高效的 Node.js Web 框架，专注于提供快速且低开销的服务",
    icon: FastifySvg,
  },
  {
    title: "Sails.js",
    smallTitle:
      "Sails.js 是一个基于 Node.js 的 MVC（Model-View-Controller）框架，专注于简化构建实时Web应用程序的过程。Sails.js 提供了对实时功能的内置支持，包括WebSocket的自动集成，使得构建实时Web应用变得更加容易。",
    icon: SailsSvg,
  },
  {
    title: "Adonis.js",
    smallTitle:
      "Adonis.js是一个全栈MVC框架，提供强大的命令行工具、ORM、自动化测试和安全性功能，鼓励异步编程，支持插件系统和GraphQL，使得构建现代化、可扩展的Web应用变得简单而高效。",
    icon: AdonisSvg,
  },
];

/**
 * 数据库ORM框架
 */
export const DataBaseORMRFrame: Navigations = [
  {
    title: "Prisma",
    smallTitle:
      "Prisma 是一款现代的、类型安全的数据库访问工具和ORM（对象关系映射）框架，专注于为Node.js和TypeScript应用程序提供数据库访问的便捷和强大的解决方案。",
    icon: PrismaSvg,
  },
  {
    title: "TypeORM",
    smallTitle:
      "TypeORM 是一款开源的、基于 TypeScript 的对象关系映射（ORM）框架，用于在 Node.js 环境中与关系型数据库进行交互。",
    icon: TypeORMSvg,
  },
  {
    title: "Sequelize",
    smallTitle:
      "Sequelize 是一款基于 JavaScript/Node.js 的ORM（对象关系映射）库，用于简化与关系型数据库的交互。",
    icon: SequelizeSvg,
  },
  {
    title: "Mongoose",
    smallTitle:
      "Mongoose 是一个在 Node.js 环境中操作 MongoDB 数据库的官方 ODM（Object Data Modeling）库，它简化了 MongoDB 数据库的交互和管理，提供了强大的模型定义、查询构建和中间件支持，使开发者能够更轻松地使用 MongoDB 存储和操作数据。",
    icon: MongooseSvg,
  },
];

/**
 * 常用的Node.js库
 */
export const CommonNodeJsLibraries: Navigations = [
  {
    title: "Nodemailer",
    smallTitle:
      "Nodemailer 是一个强大的 Node.js 库，专门用于发送电子邮件。它提供了灵活的 API，支持附件、HTML 内容、多种传输方式，以及各种邮件服务商的集成。无论是构建简单的文本邮件还是复杂的HTML邮件，Nodemailer都是一个可靠且广泛使用的工具，使得在 Node.js 环境中轻松实现邮件发送功能成为可能。",
    icon: NodemailerSvg,
  },
  {
    title: "Node-Fetch",
    smallTitle:
      "node-fetch 是一个用于发起 HTTP 请求的 Node.js 模块，它与浏览器中的 fetch API 类似。它简化了在 Node.js 环境中进行网络请求的过程，支持 Promise，提供了简洁而现代的 API，适用于获取和处理 HTTP 响应。通过使用 node-fetch，您可以轻松地执行 GET、POST 等各种 HTTP 请求，并处理返回的数据。",
    icon: NodeFetchSvg,
  },
  {
    title: "Passport",
    smallTitle:
      "Passport 是一个用于 Node.js 的身份验证中间件，它设计简洁、灵活，用于处理用户身份验证和授权的流程。Passport 提供了一个插件式的体系结构，允许开发者选择并配置适合其应用程序需求的身份验证策略，如本地用户名密码、OAuth、OpenID 等。通过使用 Passport，开发者可以轻松地集成和管理用户身份验证，使其应用程序更安全且易于扩展。",
    icon: PassportSvg,
  },
  {
    title: "JsonWebToken",
    smallTitle:
      "JSON Web Token（JWT）是一种开放标准（RFC 7519），用于在各方之间安全地传输信息。它是一种紧凑的、自包含的方式，可以在用户和服务之间传递声明。JWT通常用于身份验证和信息交换，被广泛应用于 Web 开发领域。一个JWT包含了经过签名的声明，可以被验证和解码，以确保信息的完整性和来源可信。JWT的结构由三个部分组成：Header、Payload 和 Signature。 Header 和 Payload 使用 Base64 进行编码，然后通过一个点号连接在一起，最后添加签名，形成 JWT。 JWT的签名可以使用密钥进行验证，确保 JWT 的内容没有被篡改。",
    icon: JsonWebTokenSvg,
  },
  {
    title: "Sharp",
    smallTitle:
      "Sharp 是一个高性能的图像处理库，专为 Node.js 设计。它支持快速的图像调整大小、裁剪、旋转、滤镜应用等操作，并在处理大型图像时表现出色。Sharp 基于 libvips（一个用于图像处理的开源库），提供简单而强大的 API，使开发者能够轻松地集成图像处理功能到他们的应用程序中。",
    icon: SharpSvg,
  },
  {
    title: "Multer",
    smallTitle:
      "Multer 是一个用于处理 Node.js 中文件上传的中间件。它能够解析并处理来自 HTML 表单的文件上传请求，支持单个文件或多个文件的同时上传。Multer 提供了易于使用的 API，允许您定义文件的存储位置、文件命名规则以及文件类型的限制。通过 Multer，您可以方便地将文件上传功能集成到 Express.js 应用程序中。",
    icon: MulterSvg,
  },
];
