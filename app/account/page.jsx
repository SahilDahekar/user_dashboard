"use client"
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { useRouter } from 'next/navigation';
import ModalLoginSuccess from "../components/ModalLoginSuccess";

export default function Account() {
  const router = useRouter();
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

  function handleSubmit(event) {
    console.log("Submitting form...");

    // Simulating a successful login for demonstration purposes
    setShowLoginSuccessModal(true);// Show the success modal after 2 seconds
  }

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
        <form
          className="flex flex-col w-full justify-center items-start gap-5"
          action={handleSubmit}
        >
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
      {showLoginSuccessModal && (
        <ModalLoginSuccess handleCloseLoginSuccessModal={handleCloseLoginSuccessModal} />
      )}
    </div>
  );
}
