import { sectionActions } from "../../../../lib/store/sectoionSlice";
import store from "../../../../lib/store/store";
import { http } from "../../../../lib/utils/repository";
import { saveQuestionToStore } from "../logic";

const dispatch = store.dispatch;

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
