import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export interface IDownloadFilesWebPartProps {
    nameFile: string;
    collectionData: any[];
}
export default class DownloadFilesWebPart extends BaseClientSideWebPart<IDownloadFilesWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    private _link;
    render(): void;
    protected onInit(): Promise<void>;
    private _getUrlLink;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=DownloadFilesWebPart.d.ts.map