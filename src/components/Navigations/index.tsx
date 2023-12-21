import NavTitle from "./NavTitle";
import NavBar from "./NavBar";
import "./index.scss";
import { Item } from "@site/src/components/Navigations/types";

interface Props {
  dataSource: Item[];
  title: string;
}
export default function Navigations(props: Props) {
  const { dataSource, title } = props;
  return (
    <>
      <NavTitle title={title} />
      <div className="navigator-container">
        {dataSource.map((item) => {
          return <NavBar key={item.url} item={item} />;
        })}
      </div>
    </>
  );
}
