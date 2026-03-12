import CheckToken from "./CheckToken";

function ProtectetPage({ children }){
    if(!CheckToken()){
        alert("Kindely Login First")
        window.location.href = "/login"
    }
    return children;
}

export default ProtectetPage;