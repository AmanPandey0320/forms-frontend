import { sectionActions } from "../../../../lib/store/sectoionSlice";
import store from "../../../../lib/store/store";
import { questionAction } from "../../../../lib/store/questionSlice";
import { http } from "../../../../lib/utils/repository";
import { saveQuestionToStore } from "../logic";

const dispatch = store.dispatch;

/**
 *
 * @param {*} id
 * @returns
 */
export const titleTextChangeListner = (id) => (e) => {
  const title = e.target.value;
  dispatch(sectionActions.editTitle({ id, title }));
};

/**
 *
 * @param {*} id
 * @returns
 */
export const descriptionTextChangeListner = (id) => (e, editor) => {
  const value = editor.getData();
  dispatch(
    sectionActions.editSectionWithKey({ id, value, key: "description" })
  );
};

/**
 *
 * @param {*} id
 * @returns
 */
export const descriptionTextChangeListner2 = (id) => (e) => {
  const value = e.target.value;
  dispatch(
    sectionActions.editSectionWithKey({ id, value, key: "description" })
  );
};

/**
 *
 * @param {*} sid
 * @param {*} fid
 * @param {*} order
 * @param {*} idx
 * @returns
 */
export const addNewQuestion = (sid, fid, order = 1) => (e) => {
  const formData = { sid, fid, order };
  http("/api/question/save-action", "POST", { formData })
    .then((res) => {
      const { data, err, messages } = res.data;
      if (err.length > 0) {
        console.log(err);
        return;
      }
      const { result, saved } = data;
      const { question } = result;
      saveQuestionToStore(question, order);
      let questions = [question.id];
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
