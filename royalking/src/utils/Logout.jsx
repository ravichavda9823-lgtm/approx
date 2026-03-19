import Cookie from "js-cookie";


function Logout () {
   try {
    Cookie.remove("token");
    alert("Logout Successfully...")
     window.location.replace("/login");
  } catch (e) {
    console.log(e);
  }
};
function LogoutwithoutNotification() {
  try {
    Cookie.remove("token");
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default Logout ;

export { LogoutwithoutNotification };
