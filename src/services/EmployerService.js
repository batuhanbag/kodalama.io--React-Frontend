import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employer/getall");
  }

  addEmployers(body) {
    return axios.post("http://localhost:8080/api/employer/register", body);
  }

  uptadeEmployers(body) {
    return axios.post("http://localhost:8080/api/employer/update", body);
  }
  getEmployerById(id) {
    return axios.get("http://localhost:8080/api/employer/getById?userId=" + id);
  }
}
