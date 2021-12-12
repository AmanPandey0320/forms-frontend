import { questionAction } from "../../../../lib/store/questionSlice";
import { sectionActions } from "../../../../lib/store/sectoionSlice";
import store from "../../../../lib/store/store";
import { http } from "../../../../lib/utils/repository";
import { saveQuestionToStore, saveOptionToStore } from "../logic";

const baseUrl = process.env.REACT_APP_backend_api_url;
const dispatch = store.dispatch;

/**
 *
 * @param {*} sid
 * @param {*} fid
 * @param {*} order
 * @returns
 */
export const addNewQuestion = (sid, fid, order, idx) => (e) => {
  const formData = { sid, fid, order };
  http("/api/question/save-action", "POST", { formData })
    .then((res) => {
      const state = store.getState();
      const { data, err, messages } = res.data;
      if (err.length > 0) {
        console.log(err);
        return;
      }
      const { result, saved } = data;
      const { question } = result;
      saveQuestionToStore(question, order);
      const ques = state.section.data[question.sid].questions;
      let questions = ques.slice(0, idx + 1);
      questions.push(question.id);
      const temp = ques.slice(idx + 1, ques.length);
      questions = [...questions, ...temp];
      dispatch(
        sectionActions.editQuestionOrder({
          questions,
          id: question.sid,
        })
      );
      dispatch(questionAction.reorderQuestion({ orders: questions }));
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * @param {*} qid
 * @param {*} sid
 * @param {*} fid
 */
export const addNewOption = (qid, sid, fid) => (e) => {
  const formData = { qid, sid, fid };
  http("/api/option/save-action", "POST", { formData })
    .then((res) => {
      const { data, err, messages } = res.data;
      if (err.length > 0) {
        console.log(err);
        return;
      }
      const { result } = data;
      const { id } = result;
      const state = store.getState();
      saveOptionToStore(result);
      let options = state.question.data[qid]?.options;
      if (options) {
        options = [...options, id];
        dispatch(
          questionAction.editWithKeyValue({
            id: qid,
            key: "options",
            value: options,
          })
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 *
 * @param {*} id
 * @returns
 */
export const inactiveQuestion = (id) => (e) => {
  dispatch(questionAction.editWithKeyValue({ id, key: "active", value: 0 }));
};

/**
 *@description handle file upload
 * @param {*} e
 */
export const uploader = (file, id) => {
  return new Promise((resolve, reject) => {
    let body = new FormData();
    let answer = { name: file.name, type: file.type };
    body.append("file", file);
    http("/api/storage/upload", "POST", body)
      .then((res) => {
        console.log("question file upload res------>", res);
        const { code, message } = res.data;
        if (code === 200) {
          answer.sname = message;
          dispatch(
            questionAction.editWithKeyValue({
              id,
              key: "attachment",
              value: message,
            })
          );
          return resolve(answer);
        } else {
          return reject([{ code: "ERROR", message: "Some error occured!" }]);
        }
      })
      .catch((err) => {
        console.log("question file upload err ------>", err);
        return reject([err]);
      });
  });
};

/**
 *
 * @param {*} name
 * @param {*} newtab
 * @returns
 */
export const openFile = (name, newtab) => (e) => {
  if (Boolean(name) === false) {
    return;
  }
  const _url = `${baseUrl}/api/storage/download/${name}`;
  if (newtab) {
    window.open(_url, "_blank").focus();
  } else {
    window.location = _url;
  }
};

/**
 *
 * @param {*} id
 * @returns
 */
export const removeFile = (id) => (e) => {
  if (Boolean(id) === false) {
    return;
  }
  dispatch(
    questionAction.editWithKeyValue({
      id,
      key: "attachment",
      value: "",
    })
  );
};

/**
 *
 * @param {*} fid
 * @returns
 */
export const addNewSection = (fid) => {
  return new Promise((resolve, reject) => {
    if (Boolean(fid) === false) {
      return reject([{ code: "ERROR", message: "No form available!" }]);
    }
    http("/api/section/save-action", "POST", { fid })
      .then((res) => {
        console.log("add section res------>", res);
        const { data, err, messages } = res.data;
        if (err?.length > 0) {
          return reject(err);
        }
        const { id, result: section } = data.result;
        const questions = [];
        dispatch(
          sectionActions.newSection({ section: { ...section, questions } })
        );
        return resolve(id);
      })
      .catch((err) => {
        console.log("add new section error------->", err);
        return reject([err]);
      });
  });
};
