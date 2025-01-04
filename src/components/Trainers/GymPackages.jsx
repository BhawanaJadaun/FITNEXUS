import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const GymPackages = () => {
  return (
    <div className="p-8 bg-primary m-5">
      <h1 className="text-4xl font-bold text-center mb-10">Gym Packages</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Standard Package */}
        <PricingCard
          packageName="Standard"
          price="29"
          features={[
            "5 team members",
            "200+ components",
            "40+ built-in pages",
            "1 year free updates",
            "Life time technical support",
          ]}
        />
        {/* Premium Package */}
        <PricingCard
          packageName="Premium"
          price="49"
          features={[
            "10 team members",
            "500+ components",
            "80+ built-in pages",
            "2 years free updates",
            "Priority technical support",
          ]}
        />
        {/* Platinum Package */}
        <PricingCard
          packageName="Platinum"
          price="99"
          features={[
            "Unlimited team members",
            "All components",
            "Custom built-in pages",
            "Lifetime updates",
            "Dedicated technical support",
          ]}
        />
      </div>
    </div>
  );
};

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

function PricingCard({ packageName, price, features }) {
  return (
    <Card color="black" variant="gradient" className="w-full max-w-[20rem] p-8 bg-default text-white rounded-lg">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          {packageName}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>
          {price}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">{feature}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 text-text-primary p-3 w-1/2 ml-12 rounded-md"
          ripple={false}
          fullWidth={true}
        >
          View More
        </Button>
      </CardFooter>
    </Card>
  );
}

export default GymPackages;
