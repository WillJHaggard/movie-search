import { DETAILS } from "./action-types";

export const requestDetails = item => ({
  type: DETAILS["REQUEST"],
  payload: {
    item,
    viewing: "loading",
  },
});
