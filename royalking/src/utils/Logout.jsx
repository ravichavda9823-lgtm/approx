import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import api from "./AxiosConfig";

function Logout (navigate) {
   try {
    Cookie.remove("token");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
};
function LogoutwithoutNotification() {
  try {
    Cookie.remove("token");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export default Logout ;

export { LogoutwithoutNotification };
