import store from "../../../lib/store/store";
import { formActions } from "../../../lib/store/formSlice";
import { sectionActions } from "../../../lib/store/sectoionSlice";
import { questionAction } from "../../../lib/store/questionSlice";
import { optionAction } from "../../../lib/store/optionSlice";
import { responseActions } from "../../../lib/store/responseSlice";
import { http } from "../../../lib/utils/repository";

const dispatch = store.dispatch;
export const mapStateToProps = (state, ownProps) => {
  return {
    form: state.form.data,
    sections: state.section?.order,
  };
};

export const saveOptionToStore = (option) => {
  dispatch(optionAction.newOption({ option }));
};

export const saveQuestionToStore = (question, order) => {
  const options = question.options ? question.options.map((opt) => opt.id) : [];
  dispatch(
    questionAction.newQuestion({ question: { ...question, options, order } })
  );
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
  section.questions?.forEach((que, idx) => {
    saveQuestionToStore(que, idx + 1);
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

/**
 *
 * @param {*} data
 */
export const saveResponseToState = (data) => {
  dispatch(responseActions.save({ data }));
};

/**
 *
 * @param {*} fid
 * @param {*} addToast
 * @param {*} setSubmitting
 */
export const submitForm = (fid, addToast, setSubmitting) => {
  setSubmitting(true);
  const state = store.getState();
  const response = state.response.data;
  const body = { fid, response };
  http("/api/response/save-action", "POST", body)
    .then((res) => {
      console.log("response submit res ----->", res);
      const { err, data, messages } = res.data;
      if (err?.length > 0) {
        err?.forEach((e) => {
          addToast(`${e.code} : ${e.message}`, {
            appearance: "error",
          });
        });
        return;
      }
      const { result } = data;
      if (result?.saved === true) {
        addToast("Response submitted", {
          appearance: "success",
        });
      } else {
        addToast("Some error occured", {
          appearance: "error",
        });
      }
    })
    .catch((err) => {
      console.log("response submit err ----->", err);
      addToast("Some error occured", {
        appearance: "error",
      });
    })
    .finally(() => {
      setSubmitting(false);
    });
};
