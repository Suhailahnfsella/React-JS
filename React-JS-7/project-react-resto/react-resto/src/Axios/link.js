import axios from "axios";

const url = "http://localhost:8000/api";
let token = "dpycfkNyYR1KJlwFzC3TTchgB15W56RvHZuglkE4";

export const link = axios.create({
  baseURL: url,
  headers: {
    api_token: token,
  },
});
