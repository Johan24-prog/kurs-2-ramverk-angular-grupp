export type View = 'home' | 'my-drive' | 'trash' | 'search';

export type DriveItem = {
  name: string;
  type: 'folder' | 'file';
};
