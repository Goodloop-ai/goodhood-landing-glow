import {useState, type FormEventHandler} from 'react';

export default function SignupForm() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // TODO: send email to db
    console.log("form data", emailInput, nameInput, zipcodeInput);
    setEmailInput("");
    setNameInput("");
    setZipcodeInput("");
  }

  return <form className="signup-form" onSubmit={handleSubmit}>
    <input required name="name" value={nameInput} type="text" placeholder='Name' onChange={(e) => setNameInput(e.target.value)} />
    <input required name="zipcode" value={zipcodeInput} type="zipcode" placeholder='Zip code' onChange={(e) => setZipcodeInput(e.target.value)} />
    <input required name="email" value={emailInput} type="email" placeholder='Email' onChange={(e) => setEmailInput(e.target.value)} />
    <button className="bg-sky-400 submit-btn" type="submit">Get notified</button>
  </form>
}