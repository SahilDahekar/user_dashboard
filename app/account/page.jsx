// Defining client side component
"use client"
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { useRouter } from 'next/navigation';
import ModalLoginSuccess from "../components/ModalLoginSuccess";

// Account component for creating user accounts
export default function Account() {
  const router = useRouter();
  // State for controlling the display of the login success modal
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

  // Handle form submission
  function handleSubmit(event) {
    console.log("Submitting form...");

    // Simulating a successful login for demonstration purposes
    setShowLoginSuccessModal(true);
  }

  // Handle closing the login success modal
  const handleCloseLoginSuccessModal = () => {
    setShowLoginSuccessModal(false);
    router.push('/userdetails');
  };

  return (
    <div className="mx-4 lg:mx-0">
      <h2 className="text-3xl lg:text-4xl font-bold text-background mt-6 mb-4">
        Create Account
      </h2>
      <hr />
      <div className="flex my-8 w-72">
        {/* Account creation form */}
        <form
          className="flex flex-col w-full justify-center items-start gap-5"
          action={handleSubmit}
        >
          {/* Username input field */}
          <label className="w-full">
            <p className="text-sm font-semibold mb-1">Username</p>
            <input
              className="py-2 px-3 w-full rounded-lg border border-zinc-200 focus:outline-1 outline-neutral-700"
              type="email"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </label>
          {/* Password input field */}
          <label className="w-full">
            <p className="text-sm font-semibold mb-1">Password</p>
            <input
              className="py-2 px-3 w-full rounded-lg border border-zinc-200 focus:outline-1 outline-neutral-700"
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
          </label>
          <SubmitButton />
        </form>
      </div>
      {/* Display login success modal when state is true */}
      {showLoginSuccessModal && (
        <ModalLoginSuccess handleCloseLoginSuccessModal={handleCloseLoginSuccessModal} />
      )}
    </div>
  );
}
