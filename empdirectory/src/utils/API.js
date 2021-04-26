import axios from "axios";

//API call to get all employees. Use API.getEmp to reference this call.
export default {
  getEmp: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};

