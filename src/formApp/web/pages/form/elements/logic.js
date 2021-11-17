import { fileIcons } from "../../../../assets/data/form";
import store from "../../../../lib/store/store";

export const mimeTypeIcon = (type, name) => {
  const [sup, sub] = type.split("/");
  console.log(type, name);
  const name_splt = name.split(".");
  const ext = name_splt[name_splt.length - 1];
  switch (sup) {
    case "image":
      return fileIcons.image;
    case "video":
      return fileIcons.video;
    case "audio":
      return fileIcons.audio;
    case "application": {
      switch (sub) {
        case "json":
          return fileIcons.json;
        case "x-zip-compressed":
          return fileIcons.zip;
        case "vnd.openxmlformats-officedocument.wordprocessingml.document":
          return fileIcons.word;
        case "msword":
          return fileIcons.word;
        case "vnd.openxmlformats-officedocument.presentationml.presentation":
          return fileIcons.powerPoint;
        case "pdf":
          return fileIcons.pdf;
        case "vnd.ms-excel":
          return fileIcons.excel;
        case "vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          return fileIcons.excel;
        case "octet-stream":
          return fileIcons.windows; //exe | psd
        case "vnd.debian.binary-package":
          return fileIcons.linux;
        case "vnd.android.package-archive":
          return fileIcons.apk;
        case "ecmascript":
          return fileIcons.js;
        case "javascript":
          return fileIcons.js;
        case "mspowerpoint":
          return fileIcons.powerPoint;
        case "vnd.ms-powerpoint":
          return fileIcons.powerPoint;
        case "powerpoint":
          return fileIcons.powerPoint;
        case "x-mspowerpoint":
          return fileIcons.powerPoint;
        case "x-msdownload":
          return fileIcons.windows;

        default:
          return fileIcons.code;
      }
    }
    case "text": {
      switch (sub) {
        case "csv":
          return fileIcons.excel;
        case "css":
          return fileIcons.css;
        case "html":
          return fileIcons.html;
        case "javascript":
          return fileIcons.js;
        case "x-c":
          return fileIcons.cpp;
        case "x-java-source":
          return fileIcons.java;
        case "x-script.phyton":
          return fileIcons.python;
        case "plain": {
          switch (ext) {
            case "py":
              return fileIcons.python;
            default:
              return fileIcons.text;
          }
        }
        default:
          return fileIcons.text;
      }
    }

    default: {
      switch (ext) {
        case "cpp":
          return fileIcons.cpp;
        case "java":
          return fileIcons.java;
        default:
          return fileIcons.file;
      }
    }
  }
};

/**
 * @description fetches all the options
 * @param {*} oids
 */
export const getOptions = (oids) => {
  const state = store.getState();
  const options = oids.map((oid) => {
    const option = state.option.data[oid];
    return option;
  });
};
