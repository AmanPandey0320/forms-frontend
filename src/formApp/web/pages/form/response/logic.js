import store from "../../../../lib/store/store";
import { http } from "../../../../lib/utils/repository";

const dispatch = store.dispatch;

/**
 * @description fetches all response by fid
 * @param {*} fid
 * @returns
 */
export const fetchAllResponse = (fid) => {
  return new Promise((resolve, reject) => {
    http(`/api/response/populate-by-fid?fid=${fid}`, "GET")
      .then((res) => {
        const { err, data, messages } = res.data;
        console.log("all response------->", res);
        if (err?.length > 0) {
          reject(err);
          return;
        }
        if (data?.result) {
          resolve(data.result);
          return;
        }
        reject({ code: "ERROR", message: "Some error occured" });
        return;
      })
      .catch((err) => {
        reject([{ code: err.code ? err.code : "ERROR", message: err.message }]);
        return;
      });
  });
};
