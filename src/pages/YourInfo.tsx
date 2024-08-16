import TextInput from "../components/UI/TextInput";

export default function YourInfo() {
  return (
    <div>
      <h1>Personal Info</h1>
      <p className="subtitle">
        Please provide your name, email address, and phone number.
      </p>
      <div className="space-y-4">

      <TextInput inputName="Name" placeholder="e.g. Stephen King" />
      <TextInput inputName="Email Address" placeholder="e.g. stephenking@lorem.com" />
      <TextInput inputName="Phone Number" placeholder="e.g. +1 234 567 890" />
      </div>
    </div>
  );
}
