import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputField from "../Input/Input";
import { getLocation, getFlag } from "../Api/api";

export default function FormTable() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [flag, setFlag] = useState("");
    const [countryCode,setCountryCode] = useState("")

    const inputName = document.querySelector("#name");
    const inputLastName = document.querySelector("#surname");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");
    const inputCountry = document.querySelector("#countryCode");

    useEffect(() => {
        //Detecting country code based on ip on first load and setting it automatically to phone input
        getLocation().then(data => {
            setCountryCode(data.dial_code);
            getFlag(data.code).then(data=>setFlag(data))
        }).catch((error) => console.log(error.message))
    }, [])

   //Create validation object to pass data to pattern prop 
    const validation = {
        required: true,
        email: "[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*",
        name: "[A-Za-zА-Яа-я]{2,}",
        phone:"[0-9]{1,2}[0-9]{3}[0-9]{2}[0-9]{2}"     
    }

    function handleChange(e) {
        const { name, value } = e.target;
       
        switch (name) {
            case "first_name":
                inputName.style.backgroundColor = "inherit"
                inputName.setCustomValidity("")
                setFirst_Name(value);
                break;
            case "last_name":
                inputLastName.style.backgroundColor = "inherit"
                inputLastName.setCustomValidity("")
                setLast_Name(value);
                break;
            case "email":
                inputEmail.style.backgroundColor = "inherit"
                inputEmail.setCustomValidity("")
                setEmail(value);
                break;
            case "phone":
                inputPhone.style.backgroundColor = "inherit"
                inputPhone.setCustomValidity("")
                setPhone(value);
                break;
            case "countryCode":
                 if (value === "") {
                    setCountryCode("+");
                    return;
                }
                inputCountry.style.backgroundColor = "inherit"
                inputCountry.setCustomValidity("")
                setCountryCode(value);
                break;
            default:
                return;
        }
        
    }
    
    function handleSubmit(e) {
        e.preventDefault(); 
        
    //Additional validation that colors the background in tomato when something wrong    
        if (first_name.length >= 2 && last_name.length >= 2 && email.includes("@") && email.includes(".") && phone.length >= 7) {

            //Creating an object with contact information
            const phoneNumber = `${countryCode} ${phone}`
            const data = { first_name, last_name, email, phoneNumber };
            localStorage.setItem("contact", JSON.stringify(data));
            alert("You have successfully registered")

            // Resetting the form input values
            reset();
            return;
        }
        alert("Not all fields are properly filled")
    }

    function reset() {
        setFirst_Name("");
        setLast_Name("");
        setEmail("");
        setPhone("");
    }

    return (
        <div>
            <Form className="display-flex flex-direction-column" onSubmit={handleSubmit}>
                <InputField
                    id="name"
                    title="Name"
                    type="first_name"
                    value={first_name} onChange={handleChange} pattern={validation.name}
                />
                <InputField
                    id="surname"
                    title="Last name"
                    type="last_name"
                    value={last_name} onChange={handleChange} pattern={validation.name}
                />
                <InputField
                    id="email"
                    title="Email"
                    type="email"
                    value={email} onChange={handleChange}
                    pattern={validation.email}
                />
                <div className="input-container">
                <input
                    id="countryCode"
                    className="country-code form-label" 
                    value={countryCode} type={countryCode}
                    name="countryCode"
                    onChange={handleChange}
                    required autoComplete="off"
                />
                <InputField
                    id="phone"
                    title="Phone"
                    type="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={handleChange}
                    pattern={validation.phone}
                    flag={flag}
                    countryCode={countryCode}
                />
                </div>
                <Button type="submit">Отправить</Button>
            </Form>
    </div>
)
}