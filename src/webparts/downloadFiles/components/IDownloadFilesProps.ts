export interface IDownloadFilesProps {
  absoluteUrl: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  collectionData: IcollectionData[];
  dirFile: string;
}
export interface IcollectionData {
  nameFile: string;
  link: string;
  viewMode: number;
}
