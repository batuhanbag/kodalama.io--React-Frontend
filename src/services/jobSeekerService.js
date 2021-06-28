import axios from "axios";

export default class JobSeekerService {
  getCv(id) {
    return axios.get("http://localhost:8080/api/jobseekers/getCv?id=" + id);
  }

  getJobSeekers() {
    return axios.get("http://localhost:8080/api/jobseekers/getall");
  }

  getJobSeekerById(id) {
    return axios.get(
      "http://localhost:8080/api/jobseekers/getById?userId=" + id
    );
  }

  registerJobSeeker(body) {
    return axios.post("http://localhost:8080/api/jobseekers/register", body);
  }
}
