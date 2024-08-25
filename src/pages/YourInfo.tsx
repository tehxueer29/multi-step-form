import { useUserStore } from "../store/userStore";
import TextInput from "../components/UI/TextInput";

export default function YourInfo() {
  const { name, email, phone, setName, setEmail, setPhone } = useUserStore();

  const textInputs = [
    {
      name: "Name",
      placeholder: "e.g. Stephen King",
      state: name,
      updateState: setName,
    },
    {
      name: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      state: email,
      updateState: setEmail,
    },
    {
      name: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      state: phone,
      updateState: setPhone,
    },
  ];

  return (
    <div>
      <h1>Personal Info</h1>
      <p className="subtitle">
        Please provide your name, email address, and phone number.
      </p>
      <div className="space-y-4">
        {textInputs.map((input) => (
          <TextInput
            key={input.name}
            inputName={input.name}
            placeholder={input.placeholder}
            state={input.state}
            updateState={input.updateState}
          />
        ))}
      </div>
    </div>
  );
}
