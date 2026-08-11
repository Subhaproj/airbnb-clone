import { toast } from "sonner";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {

  const navigate = useNavigate();

const { signup } = useContext(AuthContext);

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const handleSignup = (e) => { e.preventDefault(); if (!name || !email || !password) 
  { toast.error("Please fill all fields"); 
    return; }
     const success = signup({ name, email, password }); 
     if (success) { 
      toast.success("Account created successfully!"); 
      navigate("/"); } 
      else { 
        toast.error("An account with this email already exists."); } };

  return (

    <div className="flex justify-center items-center min-h-[80vh]">

      <div className="w-full max-w-md border rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Sign up
        </h1>
<form onSubmit={handleSignup}>
        <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Full Name"
  className="w-full border rounded-lg p-3 mb-4"
/>


        <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  className="w-full border rounded-lg p-3 mb-4"
/>

        <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="w-full border rounded-lg p-3 mb-6"
/>

        <button

type="submit"

className="
w-full
bg-red-500
text-white
py-3
rounded-lg
font-semibold
"
>

Create account

</button>
</form>

      </div>

    </div>

  );

}

export default Signup;
