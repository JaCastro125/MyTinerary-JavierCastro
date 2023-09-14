import { useDispatch, useSelector } from "react-redux";
import { user_login, user_logup, user_google } from "../store/actions/userActions";
import { useState, useEffect } from 'react';
import countriesData from '../json_data/countries.json';
import GoogleSignin from "../components/GoogleSignin";
import '../styles/login.css'

export default function SignIn() {

  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [activeTab, setActiveTab] = useState('signin');

  const store = useSelector(store => store.userReducer)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    image: '',
    country: ''
  })

  useEffect(() => {
    setCountries(countriesData.countries);
  }, []);

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSignIn = async (event) => {
    event.preventDefault()

    try {
      dispatch(user_login({
        data: formData
      }))
    } catch (error) {
      console.log(error);
    }
  }

  const handleSignUp = async (event) => {
    event.preventDefault()

    const requiredFields = ['name', 'email', 'password', 'image', 'country'];

    try {
      dispatch(user_logup({
        data: formData
      }))
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-90 mx-auto max-w-2xl min-h-screen relative bg-center bg-cover rounded-lg shadow-md overflow-hidden">
        <div className="p-10 bg-opacity-90">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in hidden"
            onChange={() => handleTabChange('signin')}
            checked={activeTab === 'signin'} />
          <label
            htmlFor="tab-1"
            className={`tab text-2xl uppercase cursor-pointer mr-5 ${activeTab === 'signin' ? 'bg-blue-500 text-white rounded-box' : 'bg-gray-200 text-gray-700 rounded-box'}`}
            onClick={() => handleTabChange('signin')}>
            Sign In
          </label>
          <input
            id="tab-2"
            type="radio"
            name="tab"
            className="sign-up hidden"
            onChange={() => handleTabChange('signup')}
            checked={activeTab === 'signup'} />
          <label
            htmlFor="tab-2"
            className={`tab text-2xl uppercase cursor-pointer ${activeTab === 'signup' ? 'bg-blue-500 text-white rounded-box' : 'bg-gray-200 text-gray-700 rounded-box'}`}
            onClick={() => handleTabChange('signup')}>
            Sign Up
          </label>

          <form
            onSubmit={handleSignIn}
            className="login-form mt-5">
            <div className="sign-in-htm" style={{ display: activeTab === 'signin' ? 'block' : 'none' }}>
              <div className="sign-in-htm">
                <div className="group mt-5">
                  <label htmlFor="signin-username" className="label">Username</label>
                  <input id="signin-username" type="email" name="email" className="input" placeholder="name@domain.com" onChange={handleInput} value={formData.email} />
                </div>
                <div className="group">
                  <label htmlFor="signin-password" className="label">Password</label>
                  <input id="signin-password" type="password" name="password" className="input" data-type="password" onChange={handleInput} value={formData.password} />
                </div>
                <div className="flex flex-col items-center mt-10">
                  <GoogleSignin />
                  <div className="group mt-5">
                    <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" onClick={handleSignIn} >
                      Sign in
                    </button>
                  </div>
                </div>
                <div className="hr"></div>
              </div>
            </div>
          </form>


          <form
            onSubmit={handleSignUp}
            className="login-form mt-5">
            <div className="sign-up-htm" style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>
              <div className="group">
                <label htmlFor="signup-name" className="label">Fullname</label>
                <input id="signup-name" type="text" name="name" className="input" onChange={handleInput} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="group">
                  <label htmlFor="signup-country" className="label">Country</label>
                  <select id="signup-country" name="country" className="input" onChange={handleInput}>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="signup-password" className="label">Password</label>
                  <input id="signup-password" name="password" type="password" className="input" data-type="password" onChange={handleInput} />
                </div>
              </div>
              <div className="group">
                <label htmlFor="signup-email" className="label">Email Address</label>
                <input id="signup-email" type="text" name="email" className="input" placeholder="name@domain.com" onChange={handleInput} />
              </div>
              <div className="group">
                <label htmlFor="signup-avatar" className="label">Avatar (link)</label>
                <input id="signup-avatar" type="text" name="image" className="input" placeholder="https://domain.com/image.jpg" onChange={handleInput} />
              </div>
              <div className="group mt-10 flex justify-center">
                <button type="submit" className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" onClick={handleSignUp} >
                  Sign up
                </button>
              </div>
              <div className="hr"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

