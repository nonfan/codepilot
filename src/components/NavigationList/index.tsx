import NavTitle from "./NavTitle";
import NavBar from "./NavBar";
import "./index.scss";
import { Navigations } from "@site/src";

interface Props {
  dataSource: Navigations;
  title: string;
}
export default function NavigationList(props: Props) {
  const { dataSource, title } = props;
  return (
    <>
      <NavTitle title={title} />
      <div className="navigator-container">
        {dataSource.map((item) => {
          return <NavBar key={item.url} navigationItem={item} />;
        })}
      </div>
    </>
  );
}
