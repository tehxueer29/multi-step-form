import { useState } from "react";
import Card from "../components/UI/Card";
import AddOnCard from "../components/add_ons/AddOnCard";

export type AddOn = {
  title: string;
  subtitle: string;
  price: number;
  selected: boolean;
};

export default function AddOns() {
  const [addOns, setAddOns] = useState<Array<AddOn>>([
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      price: 1,
      selected: true,
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
      selected: true,
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      price: 2,
      selected: false,
    },
  ]);
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      <div>
        {addOns.map((addOn) => (
          <AddOnCard key={addOn.title} addOn={addOn} isMonthly={false} /> //TODO: add ismonthly to state and use the real one
        ))}
        {/* <Card></Card> */}
      </div>
    </div>
  );
}
