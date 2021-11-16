import { sectionActions } from "../../../../lib/store/sectoionSlice";
import store from "../../../../lib/store/store";

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
