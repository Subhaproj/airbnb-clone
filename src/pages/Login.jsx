import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

const { login } = useContext(AuthContext);

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const handleLogin = (e) => { e.preventDefault(); const success = login(email, password); if (success) { alert("Login successful!"); navigate("/"); } else { alert("Invalid email or password."); } };

  return (

    <div className="flex justify-center items-center min-h-[80vh]">

      <div className="w-full max-w-md border rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Log in
        </h1>
<form onSubmit={handleLogin}>
        <input
type="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
placeholder="Email"
className="
w-full
border
rounded-lg
p-3
mb-4
"
/>

        <input
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
placeholder="Password"
className="
w-full
border
rounded-lg
p-3
mb-6
"
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

Log in

</button>
</form>

      </div>

    </div>

  );
}

export default Login;