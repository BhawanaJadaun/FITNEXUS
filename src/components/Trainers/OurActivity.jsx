import React from 'react';
import activity from "../../assets/activity.jpeg";
import { Button } from "@/components/ui/button";

const OurActivity = () => {
  return (
    <div className="mx-auto p-12 flex items-center gap-8 bg-primary">
      {/* Image Section */}
      <div className="flex-shrink-0 w-1/2">
        <img src={activity} alt="Activity" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {/* Activities Section */}
      <div className="w-1/2 grid gap-6">
        {/* Cardio */}
        <div className="flex items-center justify-between bg-gray-100 hover:bg-third p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-bold">Cardio</h1>
            <p className="text-gray-600">8:00 - 9:00</p>
            <p className="text-gray-600">Mondays</p>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">Sign in</Button>
        </div>

        {/* Functional Training */}
        <div className="flex items-center justify-between bg-gray-100 hover:bg-third  p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-bold">Functional Training</h1>
            <p className="text-gray-600">10:00 - 11:00</p>
            <p className="text-gray-600">Friday</p>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">Sign in</Button>
        </div>

        {/* Weight Lifting */}
        <div className="flex items-center justify-between bg-gray-100 hover:bg-third  p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-bold">Weight Lifting</h1>
            <p className="text-gray-600">1:00 - 2:00</p>
            <p className="text-gray-600">Wednesday</p>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">Sign in</Button>
        </div>

        {/* Boxing */}
        <div className="flex items-center justify-between bg-gray-100 hover:bg-third p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-xl font-bold">Boxing</h1>
            <p className="text-gray-600">3:00 - 4:00</p>
            <p className="text-gray-600">EveryDay</p>
          </div>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default OurActivity;


