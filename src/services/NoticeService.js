import axios from "axios";

export default class NoticeService {
  getNotices() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }
}
