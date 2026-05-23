import React, { useState } from "react";
import { assets } from "../assets/assets";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  });

  const [formData, setFormData] = useState(profileData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My Account</h1>
          <p className="mt-2 text-gray-600">
            Manage your profile and preferences
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "profile"
                ? "border-black text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "orders"
                ? "border-black text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === "addresses"
                ? "border-black text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            Addresses
          </button>
        </div>

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-700">
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {profileData.firstName} {profileData.lastName}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {profileData.email}
                </p>
              </div>
              <hr className="mb-6" />
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    {profileData.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Member Since
                  </p>
                  <p className="mt-1 text-sm text-gray-900">January 2024</p>
                </div>
              </div>
            </div>

            {/* Edit Profile Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Personal Information
                  </h3>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors"
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </button>
                </div>

                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={
                          isEditing ? formData.firstName : profileData.firstName
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm ${
                          isEditing
                            ? "bg-white focus:border-black focus:ring-2 focus:ring-black/10"
                            : "bg-gray-50"
                        } disabled:cursor-not-allowed outline-none transition`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={
                          isEditing ? formData.lastName : profileData.lastName
                        }
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm ${
                          isEditing
                            ? "bg-white focus:border-black focus:ring-2 focus:ring-black/10"
                            : "bg-gray-50"
                        } disabled:cursor-not-allowed outline-none transition`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={isEditing ? formData.email : profileData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm ${
                        isEditing
                          ? "bg-white focus:border-black focus:ring-2 focus:ring-black/10"
                          : "bg-gray-50"
                      } disabled:cursor-not-allowed outline-none transition`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={isEditing ? formData.phone : profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm ${
                        isEditing
                          ? "bg-white focus:border-black focus:ring-2 focus:ring-black/10"
                          : "bg-gray-50"
                      } disabled:cursor-not-allowed outline-none transition`}
                    />
                  </div>

                  {isEditing && (
                    <div className="flex gap-3 pt-6">
                      <button
                        type="button"
                        onClick={handleSave}
                        className="flex-1 rounded-lg bg-black px-6 py-3 font-semibold text-white hover:bg-gray-900 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Recent Orders
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div
                  key={order}
                  className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <div>
                    <p className="font-semibold text-gray-900">
                      Order #{12345 + order}
                    </p>
                    <p className="text-sm text-gray-600">
                      Placed on May {order}, 2024
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      PKR {3500 + order * 1000}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      Delivered
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">
                Saved Addresses
              </h3>
              <button className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 transition-colors">
                + Add Address
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border-2 border-gray-200 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold text-gray-900">Home</p>
                  <span className="inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                    Default
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {profileData.address}, {profileData.city}, {profileData.state}{" "}
                  {profileData.zipCode}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {profileData.country}
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm font-semibold text-black hover:underline">
                    Edit
                  </button>
                  <button className="text-sm font-semibold text-red-600 hover:underline">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
