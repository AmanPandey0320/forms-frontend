import store from "../../../lib/store/store";
import { formActions } from "../../../lib/store/formSlice";
import { sectionActions } from "../../../lib/store/sectoionSlice";
import { questionAction } from "../../../lib/store/questionSlice";
import { optionAction } from "../../../lib/store/optionSlice";

const dispatch = store.dispatch;
export const mapStateToProps = (state, ownProps) => {
  return {
    form: state.form.data,
    sections: state.section?.order,
  };
};

export const saveOptionToStore = (option) => {
  dispatch(optionAction.newOption({option}))
};

export const saveQuestionToStore = (question) => {
  const options = question.options ? question.options.map((opt) => opt.id) : [];
  dispatch(questionAction.newQuestion({ question: { ...question, options } }));
  question.options?.forEach((opt) => {
    saveOptionToStore(opt);
  });
};

/**
 * @description saves thr section to the store
 * @param {*} section
 */
export const saveSectionToStore = (section) => {
  const questions = section.questions
    ? section.questions.map((que) => que.id)
    : [];
  dispatch(sectionActions.newSection({ section: { ...section, questions } }));
  section.questions?.forEach((que) => {
    saveQuestionToStore(que);
  });
};

/**
 * @description saves the from to redux store
 * @param {*} form
 */
export const saveFromToStore = (form) => {
  dispatch(formActions.newForm({ form }));
  dispatch(sectionActions.clear());
  form?.sections?.forEach((sec) => {
    // console.log(sec);
    saveSectionToStore(sec);
  });
};
