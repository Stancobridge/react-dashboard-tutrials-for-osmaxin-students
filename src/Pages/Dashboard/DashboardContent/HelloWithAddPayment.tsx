import React from "react";
import { AddPaymentDropDown } from "./AddPaymentDropDown";

export const HelloWithAddPayment = () => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-3xl">Hello, Anna!</h1>
        <p className="text-gray-500 mt-2">
          Send and receive funds with pleasure
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 rounded-md py-1 bg-[#272727] text-white font-bold">
          Add Payment
        </button>
        <div>
          <AddPaymentDropDown />
        </div>
      </div>
    </section>
  );
};
