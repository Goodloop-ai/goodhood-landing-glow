import {useState, type FormEventHandler} from 'react';

export default function SignupForm() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const dataBody = JSON.stringify({
      name: nameInput,
      email: emailInput,
      zipcode: zipcodeInput,
      message: ""
    })

    try {
      const url = 'https://goodloop-nexus.onrender.com/goodloop-mgmt-api/v1/waiting-lists/';
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: dataBody
      });

      if (resp.ok) {
        console.log("Entry added.")
        setEmailInput("");
        setNameInput("");
        setZipcodeInput("");
      } else {
        throw new Error(`Status: ${resp.status}. Failed to add entry.`);
      }
    } catch (err) {
      console.error(err);
    }
    
  }

  return <form className="signup-form" onSubmit={handleSubmit}>
    <input required name="name" value={nameInput} type="text" placeholder='Name' onChange={(e) => setNameInput(e.target.value)} />
    <input required name="zipcode" value={zipcodeInput} type="tel" pattern="[0-9]*" placeholder="Zip code" max="99999" onChange={(e) => setZipcodeInput(e.target.value)} />
    <input required name="email" value={emailInput} type="email" placeholder='Email' onChange={(e) => setEmailInput(e.target.value)} />
    <button className="bg-sky-400 submit-btn" type="submit">Get notified</button>
  </form>
}