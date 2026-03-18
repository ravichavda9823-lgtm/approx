import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import api from "./AxiosConfig";

const Logout = async () => {
  try {
    const res = await api.post("/auth/logout");

    if (res.data.success) {
      alert("Logged out successfully");
      navigate("/login"); // redirect
    }
  } catch (error) {
    console.error("Logout error:", error);
    alert("Logout failed");
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

export default Logout;

export { LogoutwithoutNotification };
