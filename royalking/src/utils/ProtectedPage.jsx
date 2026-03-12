import CheckToken from "./CheckToken";

function ProtectetPage({ children }){
    if(!CheckToken()){
        alert("Kindly Login First")
        window.location.href = "/login"
    }
    return children;
}

export default ProtectetPage;