import { NavigationItem } from "@site/src";

interface Props {
  navigationItem: NavigationItem;
}
function NavBar(props: Props) {
  const { title, smallTitle, icon: Icon, url } = props.navigationItem;

  return (
    <div className="box">
      <a href={url} target="_blank" className="content border">
        <div className="icon">
          <Icon />
        </div>
        <div className="desc">
          <div className="title color">{title}</div>
          <div className="small">{smallTitle}</div>
        </div>
      </a>
    </div>
  );
}

export default NavBar;
