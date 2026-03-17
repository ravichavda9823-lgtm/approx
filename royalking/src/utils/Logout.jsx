import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Logout(navigate) {
  try {
    cookie.remove("token", { path: "/" });
    alert("Logout Succesfully");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification(navigate) {
  try {
 cookie.remove("token", { path: "/" });
    navigate("/login");
  } catch (E) {
    console.log(E);
  }
}

export default Logout;
export { LogoutwithoutNotification };
