import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

function Logout() {
  let navigate = useNavigate();
  try {
    // Cookie.remove("token");
     document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Logout Succesfully");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification() {
  try {
    // Cookie.remove("token");
     document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export default Logout;
export { LogoutwithoutNotification };
