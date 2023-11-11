import { useContext } from 'react';

import PromptbarContext from '../PromptBar.context';
import HomeContext from '../../Home/home.context';
import { FolderInterface } from 'src/types/business-ai/folder';
import { PromptComponent } from './Prompt';
import Folder from '../../Folder';

export const PromptFolders = () => {
  const {
    state: { folders },
  } = useContext(HomeContext);

  const {
    state: { searchTerm, filteredPrompts },
    handleUpdatePrompt,
  } = useContext(PromptbarContext);

  const handleDrop = (e: any, folder: FolderInterface) => {
    if (e.dataTransfer) {
      const prompt = JSON.parse(e.dataTransfer.getData('prompt'));

      const updatedPrompt = {
        ...prompt,
        folderId: folder.id,
      };

      handleUpdatePrompt(updatedPrompt);
    }
  };

  const PromptFolders = (currentFolder: FolderInterface) =>
    filteredPrompts
      .filter((p) => p.folderId)
      .map((prompt, index) => {
        if (prompt.folderId === currentFolder.id) {
          return (
            <div key={index} className="gap-2 pl-2 ml-5 border-l">
              <PromptComponent prompt={prompt} />
            </div>
          );
        }
      });

  return (
    <div className="flex flex-col w-full pt-2">
      {folders
        .filter((folder) => folder.type === 'prompt')
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((folder, index) => (
          <Folder
            key={index}
            searchTerm={searchTerm}
            currentFolder={folder}
            handleDrop={handleDrop}
            folderComponent={PromptFolders(folder)}
          />
        ))}
    </div>
  );
};
