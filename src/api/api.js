import axios from "axios";
export const crear = async (data) => await axios.post('http://10.0.2.2:4000/create/user', data);
export const loginUser = async (data) => await axios.post('http://10.0.2.2:4000/login/user', data);