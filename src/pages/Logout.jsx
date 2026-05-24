import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    // Simulate logout process
    setTimeout(() => {
      // Clear user data, tokens, etc.
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
    }, 1500);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (!showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20 pb-12">
        <div className="text-center">
          <div className="mb-6">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Logged Out Successfully</h1>
          <p className="text-gray-600 mb-8">You have been logged out of your account</p>
          <button
            onClick={() => navigate("/")}
            className="rounded-lg bg-black px-8 py-3 font-semibold text-white hover:bg-gray-900 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-20 pb-12 px-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-red-100 p-4">
              <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">Sign Out?</h1>
          <p className="mb-8 text-center text-gray-600">
            Are you sure you want to logout? You'll need to sign in again to access your account.
          </p>

          {/* Info Cards */}
          <div className="mb-8 space-y-3 rounded-xl bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-900">Keep your account secure</p>
                <p className="text-xs text-blue-700">Don't share your login credentials with anyone</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-900">Your data is safe</p>
                <p className="text-xs text-blue-700">We'll keep your information secure</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`w-full rounded-xl px-6 py-3 font-semibold text-white transition-all ${
                isLoggingOut
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 active:scale-95"
              }`}
            >
              {isLoggingOut ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging out...
                </span>
              ) : (
                "Yes, Sign Out"
              )}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoggingOut}
              className="w-full rounded-xl border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-500">
            Need help? <a href="/contact" className="font-semibold text-black hover:underline">Contact support</a>
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="mb-4 font-bold text-gray-900">Before you go...</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600">✓</span>
              <span>Your cart will be saved for 30 days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600">✓</span>
              <span>Your wish list will be available when you sign back in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-blue-600">✓</span>
              <span>You can always create a new account or recover your existing one</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Logout;
