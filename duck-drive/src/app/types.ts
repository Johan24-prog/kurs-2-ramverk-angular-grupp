export type View = 'home' | 'my-drive' | 'trash' | 'search'| 'computers' | 'shared' | 'recent' | 'starred' | 'spam' | 'storage';
export type DriveItem = {
  name: string;
  type: 'folder' | 'file';
};
