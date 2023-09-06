import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

import * as strings from "DownloadFilesWebPartStrings";
import DownloadFiles from "./components/DownloadFiles";
import { IDownloadFilesProps } from "./components/IDownloadFilesProps";

import {
  PropertyFieldCollectionData,
  CustomCollectionFieldType,
} from "@pnp/spfx-property-controls/lib/PropertyFieldCollectionData";

export interface IDownloadFilesWebPartProps {
  nameFile: string;
  collectionData: any[];
}

export default class DownloadFilesWebPart extends BaseClientSideWebPart<IDownloadFilesWebPartProps> {
  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = "";
  private _link: string = "";

  public render(): void {
    const element: React.ReactElement<IDownloadFilesProps> = React.createElement(DownloadFiles, {
      nameFile: this._link,
      isDarkTheme: this._isDarkTheme,
      environmentMessage: this._environmentMessage,
      hasTeamsContext: !!this.context.sdks.microsoftTeams,
      userDisplayName: this.context.pageContext.user.displayName,
      collectionData: this.properties.collectionData,
    });

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this._link = this._getUrlLink();
    return Promise.resolve();
  }

  private _getUrlLink(): string {
    const dirFile = "/SiteAssets/files/"; // Reemplaza con el nombre real de la lista
    const endpointFile = `${this.context.pageContext.web.absoluteUrl}${dirFile} }${this.properties.nameFile} `;
    console.log("name", this.properties.nameFile);
    return endpointFile;
  }

  // private _getEnvironmentMessage(): Promise<string> {
  //   if (!!this.context.sdks.microsoftTeams) {
  //     // running in Teams, office.com or Outlook
  //     return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then((context) => {
  //       let environmentMessage: string = "";
  //       switch (context.app.host.name) {
  //         case "Office": // running in Office
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentOffice
  //             : strings.AppOfficeEnvironment;
  //           break;
  //         case "Outlook": // running in Outlook
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentOutlook
  //             : strings.AppOutlookEnvironment;
  //           break;
  //         case "Teams": // running in Teams
  //           environmentMessage = this.context.isServedFromLocalhost
  //             ? strings.AppLocalEnvironmentTeams
  //             : strings.AppTeamsTabEnvironment;
  //           break;
  //         default:
  //           throw new Error("Unknown host");
  //       }

  //       return environmentMessage;
  //     });
  //   }

  //   return Promise.resolve(
  //     this.context.isServedFromLocalhost
  //       ? strings.AppLocalEnvironmentSharePoint
  //       : strings.AppSharePointEnvironment
  //   );
  // }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const { semanticColors } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
      this.domElement.style.setProperty("--link", semanticColors.link || null);
      this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
    }
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("nameFile", {
                  label: "nameFile",
                }),
                PropertyFieldCollectionData("collectionData", {
                  key: "collectionData",
                  label: "Collection data",
                  panelHeader: "Collection data panel header",
                  manageBtnLabel: "Manage collection data",
                  value: this.properties.collectionData,
                  fields: [
                    {
                      id: "link",
                      title: "File name",
                      type: CustomCollectionFieldType.string,
                      required: true,
                    },
                  ],
                  disabled: false,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
