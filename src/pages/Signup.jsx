import { toast } from "sonner";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
} from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const { signup } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    const success = signup({
      name,
      email,
      password,
    });

    if (success) {
      toast.success("Account created successfully!");
      navigate("/");
    } else {
      toast.error(
        "An account with this email already exists."
      );
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

      <div
        className="
          absolute
          inset-0
          bg-black/30
          pointer-events-none
        "
      />


      {/* Signup Card */}

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
            Create an account
          </h1>

          <p
            className="
              mt-2
              text-white/90
              text-sm
            "
          >
            Join us and start exploring amazing stays
          </p>

        </div>


        {/* Form */}

        <form onSubmit={handleSignup}>

          {/* Name */}

          <div className="mb-5">

            <label
              htmlFor="signup-name"
              className="
                block
                text-sm
                font-semibold
                text-white
                mb-2
              "
            >
              Full Name
            </label>

            <div className="relative">

              <User
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
                id="signup-name"
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your full name"
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


          {/* Email */}

          <div className="mb-5">

            <label
            htmlFor="signup-email"
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
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
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
              htmlFor="signup-password"
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
                id="signup-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Create a password"
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
                  setShowPassword(
                    (prev) => !prev
                  )
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


          {/* Signup Button */}

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
            Create account
          </button>

        </form>


        {/* Login */}

        <p
          className="
            text-center
            text-sm
            text-white/90
            mt-7
          "
        >

          Already have an account?{" "}

          <button
            type="button"
            onClick={() =>
              navigate("/login")
            }
            className="
              font-bold
              text-blue-500
              underline
              hover:text-white/80
            "
          >
            Log in
          </button>

        </p>

      </div>

    </div>
  );
}

export default Signup;