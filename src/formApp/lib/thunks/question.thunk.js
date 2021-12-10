import { sectionActions } from "../store/sectoionSlice";
import store from "../store/store";
import { http } from "../utils/repository";

export const saveQuestion = (id) => {
  return (dispatch) => {
    const state = store.getState();
    const formData = state.question.data[id];
    http("/api/question/save-action", "POST", { formData })
      .then((res) => {
        console.log("question save thunk----->", res);
        if (Boolean(formData?.active) === false) {
          let questions = [];
          const sid = formData?.sid;
          if (Boolean(sid) === false) {
            return;
          }
          state.section.data[sid]?.questions?.forEach((que) => {
            if (que !== id) {
              questions.push(que);
            }
          });
          dispatch(sectionActions.editQuestionOrder({ questions, id: sid }));
        }
      })
      .catch((err) => {
        console.log("error---->", err);
      });
  };
};
