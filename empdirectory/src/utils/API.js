import axios from "axios";

//export below gets all users (getUsers)
export default {
  getEmp: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};