var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import * as strings from "DownloadFilesWebPartStrings";
import DownloadFiles from "./components/DownloadFiles";
import { PropertyFieldCollectionData, CustomCollectionFieldType, } from "@pnp/spfx-property-controls/lib/PropertyFieldCollectionData";
var DownloadFilesWebPart = /** @class */ (function (_super) {
    __extends(DownloadFilesWebPart, _super);
    function DownloadFilesWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        _this._environmentMessage = "";
        _this.dirFile = "/SiteAssets/files/";
        return _this;
    }
    DownloadFilesWebPart.prototype.render = function () {
        var element = React.createElement(DownloadFiles, {
            absoluteUrl: this.context.pageContext.web.absoluteUrl,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName,
            collectionData: this.properties.collectionData,
            dirFile: this.dirFile,
        });
        ReactDom.render(element, this.domElement);
    };
    DownloadFilesWebPart.prototype.onInit = function () {
        return Promise.resolve();
    };
    DownloadFilesWebPart.prototype.onThemeChanged = function (currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        var semanticColors = currentTheme.semanticColors;
        if (semanticColors) {
            this.domElement.style.setProperty("--bodyText", semanticColors.bodyText || null);
            this.domElement.style.setProperty("--link", semanticColors.link || null);
            this.domElement.style.setProperty("--linkHovered", semanticColors.linkHovered || null);
        }
    };
    DownloadFilesWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(DownloadFilesWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    DownloadFilesWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    };
    return DownloadFilesWebPart;
}(BaseClientSideWebPart));
export default DownloadFilesWebPart;
//# sourceMappingURL=DownloadFilesWebPart.js.map