const url = "http://localhost:8000/api";
let token = "3qcH95YZZ5fqZF6SHQGuUbOaQRdZAI5wDJPRFm0U";

export const link = axios.create({
 baseURL: url,
 headers: {
  api_token: token,
 },
});
