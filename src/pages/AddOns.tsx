import { Dispatch, SetStateAction } from "react";
import { useAddOnStore } from "../store/addOnStore";
import Card from "../components/UI/Card";
import AddOnCard from "../components/add_ons/AddOnCard";

export default function AddOns() {
  const { addOns, setAddOns } = useAddOnStore();
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p className="subtitle">Add-ons help enhance your gaming experience.</p>
      <div className="space-y-4">
        {addOns.map((addOn) => (
          <Card
            key={addOn.title}
            selection={addOn}
            selections={addOns}
            setSelections={setAddOns as Dispatch<SetStateAction<Array<object>>>}
            isSingleSelection={false}
          >
            <AddOnCard key={addOn.title} addOn={addOn} />
          </Card>
        ))}
      </div>
    </div>
  );
}
