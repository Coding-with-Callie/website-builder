export type PageType = {
  id: number;
  create_date: Date;
  creator_id: number;
  heading: string | null;
  draft_heading: string | null;
  menu_name: string;
  draft_menu_name: string | null;
  metadata: null;
  modify_date: Date | null;
  path: string;
  draft_path: string | null;
  publish_date: Date | null;
  show?: boolean;
};
