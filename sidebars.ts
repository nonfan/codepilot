import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "index",
    {
      type: "doc",
      id: "actions",
      label: "Actions自动化",
    },
    {
      type: "category",
      label: "前端插件库",
      collapsed: false,
      link: {
        type: "generated-index", // 生成菜单列表
      },
      items: ["plugin-library/rich-text-editor"],
    },
  ],
};

export default sidebars;
