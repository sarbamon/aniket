export interface MenuItem {
  href: string;
  label: string;
}

export interface NavClickHandler {
  (e: React.MouseEvent<HTMLAnchorElement>): void;
}