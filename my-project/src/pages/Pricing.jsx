import React from "react";
import { Link } from "react-router-dom";
import SubscriptionForm from "./SubscriptionForm";

export default function Pricing() {
  return (
    <div className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Plan</h1>

      {/* ...pricing cards code... */}

      {/* Subscription Form below pricing section */}
      <div className="mt-16 max-w-2xl mx-auto">
        <SubscriptionForm />
      </div>
    </div>
  );
}
