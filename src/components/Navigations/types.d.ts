interface Children {
  title: string;
  icon: any;
  url: string;
}

export interface Item {
  title: string;
  smallTitle: string;
  icon: any;
  url: string;
  children?: Children[];
}
