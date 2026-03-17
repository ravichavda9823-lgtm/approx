import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  try {
    cookie.remove("token");
    alert("Logout Succesfully");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification() {
  try {
    cookie.remove("token");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export default Logout;
export { LogoutwithoutNotification };
