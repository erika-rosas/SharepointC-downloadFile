import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { IcollectionData } from "./components/IDownloadFilesProps";
export interface IDownloadFilesWebPartProps {
    nameFile: string;
    collectionData: IcollectionData[];
}
export default class DownloadFilesWebPart extends BaseClientSideWebPart<IDownloadFilesWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    private dirFile;
    render(): void;
    protected onInit(): Promise<void>;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=DownloadFilesWebPart.d.ts.map