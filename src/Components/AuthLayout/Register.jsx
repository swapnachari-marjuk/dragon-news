<<<<<<< HEAD
import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Provider/AuthContext";

const Register = () => {
  const { setUser, createUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        e.target.reset();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
=======
import React from "react";
import { Link } from "react-router";

const Register = () => {
>>>>>>> parent of fd8217d (Implemented Sign up, sign in, sign out functionalities)
  return (
    <div className="flex justify-center items-center pt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-4 p-4">
        <h1 className="font-bold text-2xl text-center">
          Register your account
        </h1>
        <form className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
<<<<<<< HEAD
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              minLength={5}
              maxLength={25}
              required
            />
=======
            <input type="text" className="input" placeholder="Name" />
>>>>>>> parent of fd8217d (Implemented Sign up, sign in, sign out functionalities)
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo Url" />
            <label className="label">Email</label>
<<<<<<< HEAD
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div></div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
=======
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
                
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
>>>>>>> parent of fd8217d (Implemented Sign up, sign in, sign out functionalities)
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
