import type SideBarItemType from "./sidebarItemType";

export default interface SideBarType {
  [key: string]: Array<SideBarItemType> | null;
}
