import cookie from "js-cookie";

function Logout() {
  try {
    cookie.remove("token");
    alert("Logout Succesfully");
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification() {
  try {
    cookie.remove("token");
    window.location.href = "/login";
  } catch (E) {
    console.log(E);
  }
}

export default Logout;
export { LogoutwithoutNotification };
