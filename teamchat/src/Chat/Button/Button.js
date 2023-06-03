import { useNavigate } from "react-router-dom";
import socket from "../../socket";
//Logout button
function Button({ me }) {
  // if pressed we navigate to Login page
  const navigate = useNavigate();
  const handleClick = function () {
    socket.emit('logout', me.username);
    navigate('/');
  }

  return (
    // <!--Logout button--> 
    <button onClick={handleClick} type="button" className="btn btn-danger button">Logout</button>

  );
}

export default Button; 