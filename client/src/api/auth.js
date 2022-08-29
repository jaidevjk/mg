import axios from "axios";
// const API = axios.create({
//   baseURL: "http://localhost:5000",
// });

// const API = axios.create({
//   baseURL: "https://multiplex-backend-testing.azurewebsites.net",
// });
// const API = axios.create({
//   baseURL: "https://multiplextechraven.herokuapp.com",
// });
const API = axios;
API.interceptors.request.use((req) => {
  if (sessionStorage.getItem("profile")) {
    req.headers.Authorization = `${
      JSON.parse(sessionStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formValues) => API.post("/user/signin", formValues);
export const signup = (formValues) => API.post("/user/signup", formValues);
export const loginAttempts = (formValues) =>
  API.post("/user/loginAttempt", formValues);
export const fetchLogins = () => API.get("/user/loginAttempt");
