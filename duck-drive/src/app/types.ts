export type View = 'home' | 'my-drive' | 'trash' | 'search'| 'computers' | 'shared' | 'recent' | 'starred' | 'spam' | 'storage';
export type DriveItem = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  deletedAt?: number; // Timestamp när filen togs bort
};
