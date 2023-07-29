import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white rounded-lg  p-6 rounded-lg shadow-lg">
      <button
        type="button"
        style={{ width: "110%", height: "50px" }}
        class="text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        About Us
      </button>
      <div className="grid grid-cols-2 gap-4">
        <a href="/mission" className="text-blue-500 hover:underline">
          Our Mission
        </a>
        <a href="/team" className="text-blue-500 hover:underline">
          Our Team
        </a>
        <a href="/values" className="text-blue-500 hover:underline">
          Our Values
        </a>
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact Us
        </a>
      </div>
      <h4 style={{ marginTop: "10px" }}>spehre.io@2023</h4>
    </div>
  );
};

export default AboutUs;
