import { useContext } from 'react';

import { ConversationComponent } from './Conversation';
import { FolderInterface } from 'src/types/business-ai/folder';
import HomeContext from '../../Home/home.context';
import Folder from '../../Folder';

interface Props {
  searchTerm: string;
}

export const ChatFolders = ({ searchTerm }: Props) => {
  const {
    state: { folders, conversations },
    handleUpdateConversation,
  } = useContext(HomeContext);

  const handleDrop = (e: any, folder: FolderInterface) => {
    if (e.dataTransfer) {
      const conversation = JSON.parse(e.dataTransfer.getData('conversation'));
      handleUpdateConversation(conversation, {
        key: 'folderId',
        value: folder.id,
      });
    }
  };

  const ChatFolders = (currentFolder: FolderInterface) => {
    return (
      conversations &&
      conversations
        .filter((conversation) => conversation.folderId)
        .map((conversation, index) => {
          if (conversation.folderId === currentFolder.id) {
            return (
              <div key={index} className="gap-2 pl-2 ml-5 border-l">
                <ConversationComponent conversation={conversation} />
              </div>
            );
          }
        })
    );
  };

  return (
    <div className="flex flex-col w-full pt-2">
      {folders
        .filter((folder) => folder.type === 'chat')
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((folder, index) => (
          <Folder
            key={index}
            searchTerm={searchTerm}
            currentFolder={folder}
            handleDrop={handleDrop}
            folderComponent={ChatFolders(folder)}
          />
        ))}
    </div>
  );
};
