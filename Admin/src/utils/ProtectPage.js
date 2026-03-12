import CheckToken from "./CheckToken";

function ProtectetPage({ children }){
    if(!CheckToken()){
        window.location.href = "/login"
    }
    return children;
}

export default ProtectetPage;