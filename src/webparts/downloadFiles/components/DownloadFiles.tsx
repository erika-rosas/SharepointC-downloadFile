import * as React from "react";
import styles from "./DownloadFiles.module.scss";
import { IDownloadFilesProps } from "./IDownloadFilesProps";

let fileName = "";

export default class DownloadFiles extends React.Component<
  IDownloadFilesProps,
  {}
> {
  public render(): React.ReactElement<IDownloadFilesProps> {
    const { hasTeamsContext, collectionData, absoluteUrl, dirFile } =
      this.props;
    if (collectionData !== undefined) {
      fileName = `${absoluteUrl}${dirFile}${collectionData[0].link} `;
    }
    return (
      <section
        className={`${styles.downloadFiles} ${
          hasTeamsContext ? styles.teams : ""
        }`}
      >
        <div className={styles.content}>
          <div>
            <a
              href={`${fileName}`}
              download={true}
              className={styles.content__dowload}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="none"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                  stroke="#3C1053"
                >
                  <path
                    stroke="#3C1053"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    stroke="#3C1053"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
              </span>
              <span>Descargar</span>
            </a>
          </div>
        </div>
        <div>
          <div>
            <a
              href={`${fileName}`}
              download={true}
              className={`${styles.content_line_dowload}`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                  stroke="#3C1053"
                >
                  <path
                    stroke="#3C1053"
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    stroke="#3C1053"
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
              </span>
              <span className={`${styles.p_3}`}>Descargar</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
