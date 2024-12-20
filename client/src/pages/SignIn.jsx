import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInAction, clearMessage } from "../redux/actions/authActions";
import { AiFillGithub } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ButtonLoadingSpinner from "../components/loader/ButtonLoadingSpinner";
import Logo from "../assets/cc.png";



const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setLoadingText("Signing in...");
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const timeout = setTimeout(() => {
      setLoadingText(
        "This is taking longer than usual. Please wait while backend services are getting started."
      );
    }, 5000);
    await dispatch(signInAction(formData, navigate));
    setLoading(false);
    clearTimeout(timeout);
  };

  const signInError = useSelector((state) => state.auth?.signInError);
  const successMessage = useSelector((state) => state.auth?.successMessage);

  const handleClearMessage = () => {
    dispatch(clearMessage());
  };

  return (
    <section  className="bg-image" style={{  backgroundImage: "url('a.jpg')",  // Use the imported image in style
      backgroundSize: 'cover',  // Ensure the image covers the entire section
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
       height: '100vh' }}
  >
      <div className="container mx-auto flex min-h-screen items-center justify-end px-6">
        <form className="w-2/3 mr-8">
          <h3 class="text-5xl font-bold text-purple-700 text-center mb-4">Get back to sharing your world. We’ve missed your posts and thoughts!</h3>
         <p class="text-lg text-purple-300 text-center mb-3">
             It’s time to bring your creativity back into the spotlight.
           Log in to share your latest photos, videos, 
          and thoughts with the community.Everyone’s waiting to see what you’ll create next.
          Your unique voice is what makes this place special!</p>
           <p class="text-base text-purple-400 text-center">
          </p>
   
        </form>
        <form className="w-1/3 ">
          <div className="mx-auto flex justify-center">
            <img className="h-full w-full " src={Logo} alt="" />
          </div>
          {signInError && (
            <div
              className="mt-6 flex items-center justify-between rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <div>
                <span className="block sm:inline">{signInError}</span>
              </div>
              <button
                className="font-bold text-red-700"
                onClick={handleClearMessage}
              >
                <RxCross1 className="h-3 w-3" />
              </button>
            </div>
          )}
          {successMessage && (
            <div
              className="mt-6 flex items-center justify-between rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
              role="alert"
            >
              <div>
                <span className="block sm:inline">{successMessage}</span>
              </div>
              <button
                className="font-bold text-green-700"
                onClick={handleClearMessage}
              >
                <RxCross1 className="h-3 w-3" />
              </button>
            </div>
          )}
          <div className="mt-6 flex items-center justify-center">
            <Link
              to={"/signin"}
              className="w-1/3 border-y-2 border-purple-700 py-2 text-center text-lg font-mono font-bold text-purple-400 "
            >
              Sign In
            </Link>
            <Link
              to={"/signup"}
              className="w-1/3 border-y-2 border-gray-400 py-2 text-center text-lg font-mono font-bold text-gray-400 "
            >
              Sign Up
            </Link>
          </div>

          <div className="relative mt-6 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-full border bg-white px-11 py-3 text-gray-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Enter your Email address"
              required
              autoComplete="off"
            />
          </div>
          <div className="relative mt-4 flex items-center">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-3 h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-full border bg-white px-11 py-3 text-gray-700 focus:border-purple-400 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-40"
              placeholder="Enter your Password"
              required
              autoComplete="off"
            />
          </div>
          <div className="mt-6">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className={`w-full transform rounded-full bg-purple-500 px-6 py-3 text-sm font-medium tracking-widest text-white transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-50 ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? (
                <ButtonLoadingSpinner loadingText={loadingText} />
              ) : (
                "Sign in"
              )}
            </button>
          </div>
          <span className="flex items-center justify-center py-4 text-sm text-white ">
          <a
            href="https://github.com/alwinvargh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-purple-100"
          >
            <AiFillGithub className="mr-2 h-5 w-5" />
            <span>GitHub</span>
          </a>
          <Link
            to="/admin"
            className="ml-8 flex items-center hover:text-purple-100"
          >
            <MdOutlineAdminPanelSettings className="mr-2 h-5 w-5" />
            <span>Admin</span>
          </Link>
        </span>
        </form>
  
      </div>
    </section>
  );
};

export default SignIn;
