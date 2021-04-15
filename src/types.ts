export type RouteType = {
  name: "Overview" | "Swap" | "Pool" | "History" | "Settings";
  link: string;
  screen: React.FC<any>;
};

export type RouteSelection = {
  Overview: boolean;
  Swap: boolean;
  Pool: boolean;
  History: boolean;
  Settings: boolean;
};
