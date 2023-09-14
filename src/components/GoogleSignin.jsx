import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { user_google } from "../store/actions/userActions";

export default function GoogleSignin() {

    const googleButton = useRef();
    const dispatch = useDispatch();

    const handleCredentialResponse = async (response) => {
        const data = {
            token_id: response.credential
        }
        const userResponse = await axios.post('http://localhost:3000/api/auth/google', data)

        dispatch(user_google(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            google.accounts.id.initialize({
                client_id: "536246484423-4lr3d8hfus0cn2fdljca5jnjqeb7teos.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                googleButton.current,
                {
                    type: "standard",
                    shape: "pill",
                    theme: "outline",
                    text: "signin_with",
                    size: "medium",
                    locale: "en",
                }
            );
        }
    }, [])

    return (
        <div ref={googleButton} className=""></div>
    )
}
