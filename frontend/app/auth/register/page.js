"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { notFound } from "next/navigation";

export default function RegisterPage() {
  const { isLoggedIn } = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message || "Registration complete!");
    } catch (error) {
      console.error(error);
      alert("Error registering user");
    }

    setLoading(false);
  };

  useEffect( () => {
    if(isLoggedIn){
      notFound();
    }
  }, [isLoggedIn])

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="row w-100">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12 mx-auto">
            <form
              onSubmit={handleRegister}
              className="bg-light rounded rounded-3 shadow p-5 w-100"
            >
              <h2 className="text-center">Hello</h2>
              <p className="text-muted text-center"> Let's create your account now</p>
              <div className="mt-3">
                <p className="fw-bold">Email Address</p>
                 <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="p-2 rounded form-control"
                />
              </div>

              <div className="mt-3">
                <p className="fw-bold">Username</p>
                 <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className="p-2 rounded form-control"
                />
              </div>


              <div className="mt-3">
                <p className="fw-bold">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="p-2 rounded form-control"
                />
              </div>
              
              <button
                disabled={loading}
                type="submit"
                className="rounded-2 btn btn-primary mt-3 w-100"
              >
                {loading ? "Registering..." : "Register"}
              </button>

              <div className="mt-3">
                <p className="text-center">Return to home? <Link href="/">Home</Link></p>
              </div>
            </form>
        </div>
      </div>
    </div>

    
  );
}
