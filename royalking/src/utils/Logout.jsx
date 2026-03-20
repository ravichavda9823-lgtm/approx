import Cookie from "js-cookie";

function Logout() {
  try {
    Cookie.remove("token");
    window.location.reload = true;
    alert("Logout Successfully...");
  } catch (e) {
    console.log(e);
  }
}
function LogoutwithoutNotification() {
  try {
    Cookie.remove("token");
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default Logout;

export { LogoutwithoutNotification };
