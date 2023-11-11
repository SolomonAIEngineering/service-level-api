import { FolderInterface } from 'src/types/business-ai/folder';

export const saveFolders = (folders: FolderInterface[]) => {
  localStorage.setItem('folders', JSON.stringify(folders));
};
