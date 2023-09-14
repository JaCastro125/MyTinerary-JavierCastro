import "./App.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { user_token } from "./store/actions/userActions";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    let url = `http://localhost:3000/api/auth/token`
    let token = localStorage.getItem('token')

    if (token) {
      let configs = { headers: { 'Authorization': `Bearer ${token}` } }

      axios.post(url, null, configs)
        .then(response => dispatch(user_token(response.data.user)))
        .catch(err => {
          console.error("Server request error:", err);
  
          if (err.response) {
            console.error("Stateful server response:", err.response.status);
          } else if (err.request) {
            console.error("The request received no response from the server.");
          } else {
            console.error("Error during request:", err.message);
          }
        });
    }
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App