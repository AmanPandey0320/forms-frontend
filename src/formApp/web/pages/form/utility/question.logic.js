import { questionAction } from "../../../../lib/store/questionSlice";
import { sectionActions } from "../../../../lib/store/sectoionSlice";
import store from "../../../../lib/store/store";
import { http } from "../../../../lib/utils/repository";
import { saveQuestionToStore, saveOptionToStore } from "../logic";

const dispatch = store.dispatch;

/**
 *
 * @param {*} sid
 * @param {*} fid
 * @param {*} order
 * @returns
 */
export const addNewQuestion = (sid, fid, order) => (e) => {
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
      let questions = ques.slice(0, order);
      questions.push(question.id);
      const temp = ques.slice(order, ques.length);
      questions = [...questions, ...temp];
      dispatch(
        sectionActions.editQuestionOrder({
          questions,
          id: question.sid,
        })
      );
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
