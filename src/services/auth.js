import axios from "./axios";

const auth = {
  registration: (data) => axios.post("/user/registration", data),
  login: (data) => axios.post("/user/login", data),
  forgotPassword: (data) => axios.post("/v1/auth/forgot/password", data),
  getProfile: () => axios.get("/user/profile"),
  updateProfile: (data) => axios.patch("/user/update", data),
};

export default auth;