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
import styles from "./DownloadFiles.module.scss";
var fileName = "";
var DownloadFiles = /** @class */ (function (_super) {
    __extends(DownloadFiles, _super);
    function DownloadFiles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DownloadFiles.prototype.render = function () {
        var _a = this.props, hasTeamsContext = _a.hasTeamsContext, collectionData = _a.collectionData, absoluteUrl = _a.absoluteUrl, dirFile = _a.dirFile;
        if (collectionData !== undefined) {
            fileName = "".concat(absoluteUrl).concat(dirFile).concat(collectionData[0].link, " ");
        }
        return (React.createElement("section", { className: "".concat(styles.downloadFiles, " ").concat(hasTeamsContext ? styles.teams : "") },
            React.createElement("div", { className: styles.content },
                React.createElement("div", null,
                    React.createElement("a", { href: "".concat(fileName), download: true, className: styles.content__dowload },
                        React.createElement("span", null,
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", fill: "none", className: "bi bi-download", viewBox: "0 0 16 16", stroke: "#3C1053" },
                                React.createElement("path", { stroke: "#3C1053", d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                                React.createElement("path", { stroke: "#3C1053", d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" }))),
                        React.createElement("span", null, "Descargar")))),
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement("a", { href: "".concat(fileName), download: true, className: "".concat(styles.content_line_dowload) },
                        React.createElement("span", null,
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", className: "bi bi-download", viewBox: "0 0 16 16", stroke: "#3C1053" },
                                React.createElement("path", { stroke: "#3C1053", d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                                React.createElement("path", { stroke: "#3C1053", d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" }))),
                        React.createElement("span", { className: "".concat(styles.p_3) }, "Descargar"))))));
    };
    return DownloadFiles;
}(React.Component));
export default DownloadFiles;
//# sourceMappingURL=DownloadFiles.js.map