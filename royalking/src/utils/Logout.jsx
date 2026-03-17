import cookie from "js-cookie";

function Logout(navigate) {
  try {
    cookie.remove("token");
    alert("Logout Succesfully");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification(navigate) {
  try {
    cookie.remove("token");
    navigate("/login");
  } catch (e) {
    console.log(e);
  }
}

export default Logout;
export { LogoutwithoutNotification };
