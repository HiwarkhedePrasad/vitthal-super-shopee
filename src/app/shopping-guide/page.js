import React from 'react';

export default function ShoppingGuide() {
  return (
    <div className="min-h-screen bg-yellow-50 pt-20 lg:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center uppercase">Shopping Guide</h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to our shopping guide! Here are some tips to make your shopping experience better:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Check our "Specials" page for the latest deals.</li>
            <li>Use the search bar to find products quickly.</li>
            <li>Visit our locations page to find the nearest store.</li>
            <li>Call our hotline for any inquiries.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
