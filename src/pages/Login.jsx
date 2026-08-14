import { toast } from "sonner";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div
      className="
        min-h-[calc(100vh-80px)]
        flex
        items-center
        justify-center
        px-4
        py-10
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')",
      }}
    >

      {/* Background overlay */}

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />


      {/* Login Card */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/40
          bg-white/20
          backdrop-blur-xl
          shadow-2xl
          p-8
          md:p-10
        "
      >

        {/* Heading */}

        <div className="text-center mb-8">

          <h1
            className="
              text-3xl
              md:text-4xl
              font-bold
              text-white
              drop-shadow-md
            "
          >
            Welcome back
          </h1>

          <p className="mt-2 text-white/90 text-sm">
            Log in to continue your journey
          </p>

        </div>


        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Email */}

          <div className="mb-5">

            <label
              htmlFor="login-password"
              className="
                block
                text-sm
                font-semibold
                text-white
                mb-2
              "
            >
              Email
            </label>

            <div className="relative">

              <Mail
                size={19}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-white/70
                "
              />
              

              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/40
                  bg-white/20
                  text-white
                  placeholder:text-white/60
                  pl-11
                  pr-4
                  py-3
                  outline-none
                  backdrop-blur-sm
                  focus:border-white
                  focus:bg-white/30
                  transition
                "
              />

            </div>

          </div>


          {/* Password */}

          <div className="mb-6">

            <label
            htmlFor="login-password"
              className="
                block
                text-sm
                font-semibold
                text-white
                mb-2
              "
            >
              Password
            </label>

            <div className="relative">

              <Lock
                size={19}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-white/70
                "
              />

              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/40
                  bg-white/20
                  text-white
                  placeholder:text-white/60
                  pl-11
                  pr-12
                  py-3
                  outline-none
                  backdrop-blur-sm
                  focus:border-white
                  focus:bg-white/30
                  transition
                "
              />

              {/* Show / Hide Password */}

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  p-2
                  text-white/80
                  hover:text-white
                  transition
                "
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>


          {/* Login Button */}

          <button
            type="submit"
            className="
              w-full
              bg-white
              text-black-500
              py-3.5
              rounded-xl
              font-bold
              shadow-lg
              hover:bg-gray-100
              hover:scale-[1.02]
              active:scale-[0.98]
              transition
            "
          >
            Log in
          </button>

        </form>


        {/* Signup */}

        <p className="text-center text-sm text-white/90 mt-7">

          Don't have an account?{" "}

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="
              font-bold
              text-blue-500
              underline
              hover:text-white/80
            "
          >
            Sign up
          </button>

        </p>

      </div>

    </div>
  );
}

export default Login;