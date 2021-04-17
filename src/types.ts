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

export type AssetSelection = {
  ETH: boolean;
  BSC: boolean;
  ALL: boolean;
};

export type Assets = "ETH" | "BSC" | "ALL";
