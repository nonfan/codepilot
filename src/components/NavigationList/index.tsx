import React, { useEffect, useState } from "react";
import { ContextMenu, NavigationItem, Navigations } from "@site/src";
import TextSvg from "@site/src/assets/icons/TextSvg";
import { Menu, Item, useContextMenu, RightSlot } from "react-contexify";
import SettingSvg from "@site/src/assets/icons/SettingSvg";
import { message, Tooltip } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import BrowserOnly from "@docusaurus/BrowserOnly";
import WebSvg from "@site/src/assets/icons/WebSvg";
import CategorySvg from "@site/src/assets/icons/CategorySvg";
import "./index.css";
import { getCompleteUrl } from "@site/src/utils";

interface Props {
  dataSource: Navigations;
  title: string;
}

// 渲染图标组件
const RenderIcon: React.FC<{ icon: string | React.FC }> = ({ icon }) => {
  if (typeof icon === "string") {
    return <TextSvg text={icon} />;
  }

  if (typeof icon === "function") {
    return React.createElement(icon as React.FC);
  }

  return <TextSvg text="Logo" />;
};

// 分类栏目
function NavigationBarCategory(props: { title: string }) {
  return (
    <div className="navigation-bar-category">
      <CategorySvg width={30} />
      <div>{props.title}</div>
    </div>
  );
}

// 导航项
function Navigation(props: { navigationItem: NavigationItem }) {
  const {
    title,
    smallTitle,
    icon,
    url,
    contextMenu = [],
    officialWebsiteUrl,
  } = props.navigationItem;

  const [isShowDesc, setIsShowDesc] = useState(false);

  const [commonMenu, setCommonMenu] = useState<ContextMenu[]>([
    {
      title: "简介",
      icon: "Ctrl+E",
      action: "see-to-desc",
      keyMatcher: function (event: any) {
        return event.key === "e" && event.ctrlKey;
      },
    },
    {
      title: "设置",
      icon: SettingSvg,
      action: "open-setting",
    },
  ]);

  const { show } = useContextMenu({
    id: smallTitle,
  });

  function handleContextMenu(event: any) {
    show({
      event,
      props: {
        key: "value",
      },
    });
  }

  function handleMenuItemOnClick(item: ContextMenu) {
    if (item.action === "see-to-website") {
      return window.open(item.url, "_blank");
    }

    if (item.action === "see-to-desc") {
      setIsShowDesc(true);
      return;
    }

    if (item.action === "open-setting") {
      console.log("打开设置");
      return;
    }

    if (item.action === "other") {
      console.log("其它操作");
      return;
    }

    if (item.action === "download") {
      const aElement = document.createElement("a");
      // 设置下载链接的属性
      aElement.href = item.url;
      aElement.download = item.meta.filename;
      document.body.appendChild(aElement);
      aElement.click();
      document.body.removeChild(aElement);
    }
  }

  function handleHideTooltip(e) {
    let wrap = document.querySelector(".navigation");

    if (!wrap) {
      return;
    }

    if (!wrap.contains(e.target)) {
      setIsShowDesc(false);
    }
  }

  useEffect(() => {
    if (officialWebsiteUrl) {
      setCommonMenu([
        {
          title: "官方文档",
          url: officialWebsiteUrl,
          action: "see-to-website",
          icon: WebSvg,
        },
        ...commonMenu,
      ]);
    }

    window.addEventListener("click", handleHideTooltip);
    return () => {
      window.removeEventListener("click", handleHideTooltip);
    };
  }, []);

  return (
    <StyleProvider container={document.querySelector(".box")}>
      <Tooltip
        title={smallTitle}
        open={isShowDesc}
        overlayClassName="navbar-tooltip"
        getPopupContainer={() => document.querySelector(".navigation")}
      >
        <div className="navigation" onContextMenu={handleContextMenu}>
          <a
            href={getCompleteUrl(url)}
            onClick={(e) => {
              if (!url) {
                e.preventDefault();
                message.info("暂无文档");
              }
            }}
            target="_blank"
            className="content"
          >
            <div className="navbar-icon">
              <RenderIcon icon={icon} />
            </div>
            <div className="desc">
              <div className="title color">{title}</div>
              <div className="small ellipsis">{smallTitle}</div>
            </div>
          </a>

          <Menu id={smallTitle} animation="scale">
            {[...contextMenu, ...commonMenu].map((item) => {
              return (
                <Item
                  key={item.title}
                  onClick={() => handleMenuItemOnClick(item)}
                  keyMatcher={item.keyMatcher}
                >
                  {item.title}
                  {!item.keyMatcher ? (
                    <RightSlot>{item.icon ? <item.icon /> : null}</RightSlot>
                  ) : (
                    <RightSlot>{item.icon as string}</RightSlot>
                  )}
                </Item>
              );
            })}
          </Menu>
        </div>
      </Tooltip>
    </StyleProvider>
  );
}

// 以导航项为个体组合成的列表
export default function NavigationList(props: Props) {
  const { dataSource, title } = props;
  return (
    <BrowserOnly>
      {() => {
        return (
          <>
            <NavigationBarCategory title={title} />
            <div className="navigation-list-container">
              {dataSource.map((item) => {
                return (
                  <Navigation
                    key={item.title}
                    navigationItem={item}
                  ></Navigation>
                );
              })}
            </div>
          </>
        );
      }}
    </BrowserOnly>
  );
}
