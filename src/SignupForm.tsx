import {useState, useEffect, type FormEventHandler} from 'react';

export default function SignupForm() {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [zipcodeInput, setZipcodeInput] = useState("");
  const [message, setMessage] = useState({ text: "", color: "" });

  useEffect(() => {
    let isActive = true;
    let timer;
    if (message.text && message.color === "green") {
        timer = setTimeout(() => {
          if (isActive) {
            setMessage({text: "", color: ""});
          }
        }, 3000);
    }

    return () => {
      isActive = false;
      if (timer) clearTimeout(timer);
    }
  }, [message]);

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
        const json = await resp.json();
        if (json.email_already_registered) {
          throw new Error(`Email has already been added.`);
        }
        setMessage({text: "Email has been added!", color: "green"});
        setEmailInput("");
        setNameInput("");
        setZipcodeInput("");
      } else {
        throw new Error(`Status: ${resp.status}. Failed to add entry. Try again later.`);
      }
    } catch (err) {
      setMessage({...message, text: err.message, color: "maroon"});
    } 
  }

  const handleChange = (e, type) => {
    if (message) {
      setMessage({ text: "", color: "" });
    }

    if (type === "name") {
      setNameInput(e.target.value)
    } else if (type === "zipcode") {
      setZipcodeInput(e.target.value)
    } else if (type === "email") {
      setEmailInput(e.target.value)
    }
  }

  return <form className="signup-form" onSubmit={handleSubmit}>
    <div className='name-zipcode'>
      <input required name="name" value={nameInput} type="text" placeholder='Name' onChange={(e) => handleChange(e, "name")} />
      <input required name="zipcode" value={zipcodeInput} type="tel" pattern="[0-9]*" placeholder="Zip code" max="99999" onChange={(e) => handleChange(e, "zipcode")} />
    </div>
    <input required name="email" value={emailInput} type="email" placeholder='Email' onChange={(e) => handleChange(e, "email")} />
    <p style={{ color: message.color }}>{message.text}</p>
    <button className="bg-sky-400 submit-btn" type="submit">Get notified</button>
  </form>
}