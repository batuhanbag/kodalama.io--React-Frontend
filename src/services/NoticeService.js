import axios from "axios";

export default class NoticeService {
  getNotices() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }
  AddNotices(values) {
    return axios.post(
      "http://localhost:8080/api/jobadvertisements/add",
      values
    );
  }
  getActiveNotices() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getallbyactive"
    );
  }

  getByNoticeId(id) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getById?id=" + id
    );
  }
}
