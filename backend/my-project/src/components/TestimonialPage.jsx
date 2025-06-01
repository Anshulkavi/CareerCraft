import React, { useState } from 'react';
import { Button } from "./ui/button"; // Adjust path if necessary
import { Star } from "lucide-react"; // Assuming you're using Lucide
import TestimonialCard from "./TestimonialCard"; // Adjust path as needed

const TestimonialPage = () => {
  

  return (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <TestimonialCard />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold !text--800  mb-6">
              Your resume is an extension of yourself – make one that's truly you
            </h2>
            <Button className="bg-green-500 hover:bg-green-600 text-white  shadow-sm py-2 px-6 rounded">
              Build Your Resume
            </Button>
            <div className="mt-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-white">REVIEWS.io</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;