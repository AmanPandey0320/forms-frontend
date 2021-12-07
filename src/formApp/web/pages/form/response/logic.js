import store from "../../../../lib/store/store";
import { http } from "../../../../lib/utils/repository";

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

/**
 * @description extracts props for response csv
 * @returns an array containing header for each question { label: "que1", key: "1" }
 */
export const getCsvProps = () => {
  const state = store.getState();
  const baseUrl = process.env.REACT_APP_backend_api_url;
  const { allResponse, sentForm, allUid } = state.response;
  const uid = allUid[0]?.id;
  const form = sentForm[uid];
  const filename = `form_${form?.id}_response_csv.csv`;
  let headers = [
    { label: "Email-id", key: "email" },
    { label: "Name", key: "name" },
  ];
  let data = [];
  form?.sections.forEach((sec, sc) => {
    sec?.questions?.forEach((que, qc) => {
      headers.push({
        label: `SEC: ${sc + 1} - QUE : ${qc + 1}`,
        key: `${que?.id}`,
      });
    });
  });
  allUid?.forEach((uid) => {
    let ed = { email: uid?.email, name: uid?.name };
    const res = allResponse[uid?.id];
    sentForm[uid?.id]?.sections?.forEach((sec) => {
      sec?.questions?.forEach((que) => {
        ed[que?.id] = "no response";
        if (que?.type === "ST" || que?.type === "PG" || que?.type === "DD") {
          ed[que?.id] = res[que?.id]?.ans;
        } else if (que?.type === "SO") {
          que?.options?.forEach((opt) => {
            if (opt?.id === res[que?.id]?.ans) {
              ed[que?.id] = opt?.title;
            }
          });
        } else if (que?.type === "MO") {
          let ans = "";
          const resOp = res[que?.id]?.ans;
          if (Boolean(resOp)) {
            que?.options?.forEach((opt) => {
              if (opt?.id && resOp[opt?.id]) {
                ans = ans + opt?.title + ", ";
              }
            });
          }
          if (ans.length > 0) {
            ed[que?.id] = ans;
          }
        } else if (que?.type === "FU") {
          const resFu = res[que?.id]?.ans;
          const ans = `${baseUrl}/api/storage/download/${resFu?.sname}`;
          if (Boolean(resFu)) {
            ed[que?.id] = ans;
          }
        }
      });
    });
    data.push(ed);
  });
  return { headers, data, filename };
};
