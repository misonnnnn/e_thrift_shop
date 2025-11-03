"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useContext(AuthContext);

  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        await login(data.token);
        alert("Login successful!");
        router.push("/"); // redirect to home
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error logging in");
    }

    setLoading(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100">
      <div className="row w-100">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12 mx-auto">
          <form
            onSubmit={handleLogin}
            className="bg-light rounded rounded-3 shadow p-5 w-100"
          >
            <h2 className="text-center">Welcome Back</h2>
            <p className="text-muted text-center"> Sign in to continue to your account</p>
            <div className="mt-3">
              <p className="fw-bold">Email Address</p>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="p-2 rounded form-control"
              />
            </div>

            <div className="mt-3">
              <p className="fw-bold">Password</p>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
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
              {loading ? "Logging in..." : "Login"}
            </button>


            <div className="divider">
              <span className="divider-text">or continue with</span>
            </div>

            <div className="row">
              <div className="col">
                  <div className="btn border px-5 d-flex justify-content-center align-items-center">
                    <Image className="me-2"
                          src="/icons/google.png"   // File in public/images/
                          alt=""
                          width={30}
                          height={30}
                        />
                      <p className="p-0 m-0"> Google</p>
                  </div>
              </div>

            </div>

            <div className="mt-3">
              <p className="text-center">Don't have an account? <Link href="/auth/register">Sign up</Link></p>
            </div>
            <div className="mt-3">
              <p className="text-center">Return to home? <Link href="/">Home</Link></p>
            </div>
          </form>
        </div>  
      </div>
    </div>
  );
}
