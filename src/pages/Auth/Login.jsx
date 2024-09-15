import React from "react";
import { useState } from "react";
import Header from "../../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "sammy@gmail.com") {
      alert("Welcome Sammy, its been a while.")
    }else{
      alert("Intruder Detected!, Calling the Police!!!!")
    }
  };
  return (
    <>
      <Header/>
      <div className="flex min-h-screen justify-center items-center">
        <form onSubmit={handleSubmit}>
          <h1 className="text-purple-500 font-bold mb-3 text-2xl">Sign In</h1>
          <div className="mb-4">
            <input
              required
              type="email"
              value={email}
              className="py-3 px-4 rounded border-2"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              required
              type="password"
              value={password}
              className="py-3 px-4 rounded border-2"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button className="bg-purple-500 text-white rounded py-3 px-4">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
