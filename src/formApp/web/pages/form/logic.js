import store from "../../../lib/store/store";
import { formActions } from "../../../lib/store/formSlice";
import { sectionActions } from "../../../lib/store/sectoionSlice";

const dispatch = store.dispatch;
export const mapStateToProps = (state, ownProps) => {
  return {
    form: state.form.data,
    sections: state.section?.order,
  };
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
};

/**
 * @description saves the from to redux store
 * @param {*} form
 */
export const saveFromToStore = (form) => {
  dispatch(formActions.newForm({ form }));
  dispatch(sectionActions.clear());
  form?.sections?.forEach((sec) => {
    console.log(sec);
    saveSectionToStore(sec);
  });
};
