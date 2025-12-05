import api from "../api/axios";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore"
// import { setLogLevel } from "firebase/app";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// setLogLevel('debug')

const Registration = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [closeEye, openEye] = useState(false);

  const toggleEye = () => {
    openEye((show) => !show);
  };

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasAlphabet = /[A-Za-z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUppercase && hasAlphabet && hasSpecial && password.length >= 8;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.username]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("passwords do not match");
      return;
    }
    if (!validatePassword(form.password)) {
      setError(
        "Password must contain at least 1 uppercase, 1 lowercase, 1 special character, and 8+ characters."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/api/user/registerUser", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      toast.success(res.data.message || "Registration successful!");

      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };
  //  const handleSubmit =  async (e) => {
  //     e.preventDefault()
  //     setError("");
  //     console.log("Submit clicked", form);
  //
  //         return
  //     }

  //     if (form.password !== form.confirmPassword) {
  //         setError("passwords do not match");
  //         return;
  //     }
  //     if(!validatePassword(form.password)){
  //         setError("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and be 8+ characters long.")
  //         return;
  //     }
  //     setLoading(true)
  // try {
  //     console.log("Before Firebase call");
  //     const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password)
  //     console.log("After Firebase auth", userCredential);
  //     await setDoc(doc(db, "users", userCredential.user.uid), {
  //        name: form.name,
  //        email: form.email,
  //        role: "user"
  //     })
  //     setLoading(false)
  //     toast.success("Registration successful!")

  //     setTimeout(() => {
  //     navigate("/login")
  // }, 2000)

  // }
  // catch (error) {
  //     setLoading(false)
  //     setError(error.message)
  //     toast.error(error.message)
  //     // console.log(userCredential.user)
  // }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  bg-[linear-gradient(to_bottom,_#002366_50%,_#CEEDD6_50%)]">
      <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white p-4 m-5">
        <FaUser className="text-white text-5xl" />
      </div>
      <div className="flex flex-col items-center w-[90%] max-w-md bg-white shadow-lg rounded-2xl px-8 py-10 ">
        <h1 className="text-2xl font-bold text-gray-700 mb-6">
          CREATE ACCOUNT
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-semibold text-blue-600">FULL NAME</label>
              <input
                type="text"
                name="name"
                placeholder="type your name"
                value={form.name || ""}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="font-semibold text-blue-600">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="wisdom123@gmail.com"
                value={form.email || ""}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="font-semibold text-blue-600">PASSWORD</label>
              <div className="flex justify-around items-center relative">
                <input
                  type={closeEye ? "password" : "text"}
                  name="password"
                  placeholder="********"
                  value={form.password || ""}
                  onChange={handleChange}
                  className="w-full  border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                />

                <button
                  type="button"
                  onClick={toggleEye}
                  className="ml-2 absolute top-0 right-5 text-gray-600 focus:outline-none"
                >
                  {closeEye ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div>
              <label className="font-semibold text-blue-600">
                RE-TYPE PASSWORD
              </label>
              <div className="flex justify-around items-center relative">
                <input
                  ype={closeEye ? "password" : "text"}
                  name="confirmPassword"
                  placeholder="********"
                  value={form.confirmPassword || ""}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                />

                <button
                  type="button"
                  onClick={toggleEye}
                  className="ml-2 absolute top-0 right-5 text-gray-600 focus:outline-none"
                >
                  {closeEye ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          <button
            className="bg-blue-900 text-white text-lg px-4 py-2 mt-6 rounded-lg w-32 hover:bg-blue-700"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registering..." : "REGISTER"}
          </button>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
        <Link to="/login" className="text-green-400 font-bold">
          ALREADY HAVE AN ACCOUNT?
        </Link>
      </div>
    </div>
  );
};

export default Registration;
