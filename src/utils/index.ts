import PocketBase, { Record } from 'pocketbase'


export const ServerUrl ="http://127.0.0.1:8090"
export const WebAppUrl = "http://127.0.0.1:5173"
 
export const Client = new PocketBase('http://127.0.0.1:8090');
// rule of end of line
export const getFileDownloadPath = (record: Record) => {
    return `${ServerUrl}/api/files/${record.collectionId}/${record.id}/${record.file}`;
  };