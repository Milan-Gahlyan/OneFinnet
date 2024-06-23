import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between lg:mx-11 p-6 pb-11 min-h-[50vh]">
      <div className="md:w-1/2 pr-10 flex flex-col items-start">
        <p className="mb-2 text-2xl font-medium text-green-500">Discount up to 20%</p>
        <h1 className="text-5xl font-medium">
          Buy Fresh And Organic Grocery Food
        </h1>
        <p className="my-8 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
          purus nec nibh tortor ipsum. Placerat consequat lorem.
        </p>
        <div className="flex items-centers justify-center py-2 lg:space-x-11">
          <div className="flex items-center justify-center">
          <button className="px-8 py-4 text-white bg-olive rounded-full">
            SHOP NOW
          </button>
          </div>
          <div className="flex items-center space-x-12">
            <div>
              <p className="text-2xl font-bold">35k +</p>
              <p>Users</p>
            </div>
            <div className="mx-4 h-11 border-l border-gray-300"></div> {/* Vertical line */}
            <div>
              <p className="text-2xl font-bold">18k +</p>
              <p>Products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mr-11 flex justify-center p-6">
        <img
          src={assets.Pic}
          alt="Plate"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
