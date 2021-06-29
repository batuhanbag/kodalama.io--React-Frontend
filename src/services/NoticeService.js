import axios from "axios";

export default class NoticeService {
  getNotices() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }
  AddNotices(body) {
    return axios.post("http://localhost:8080/api/jobadvertisements/add", body);
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
