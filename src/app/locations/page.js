export default function Locations() {
  return (
    <div className="min-h-screen bg-yellow-50 pt-20 lg:pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center uppercase">Our Location</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-3xl font-bold text-orange-600 mb-4">Vitthal Super Shop</h3>
            <p className="text-xl text-gray-700 mb-2 font-medium">Grocery Store</p>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              QMQM+6Q5 gajanan watika chauk,<br />
              Khamgaon Rd, Adarsha Nagar, SBI Colony,<br />
              Shegaon, Maharashtra 444203
            </p>
            <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
              <span className="text-gray-600">(5.0 Rating)</span>
            </div>
            <p className="text-gray-600 font-bold text-lg">Phone: +91 70204 02642</p>
          </div>
        </div>
      </div>
    </div>
  );
}
