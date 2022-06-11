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
    const [country,setCountry] = useState("")

    const inputName = document.querySelector("#name");
    const inputLastName = document.querySelector("#surname");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");

    useEffect(() => {
        //Detecting country code based on ip on first load and setting it automatically to phone input
        getLocation().then(data => {
            setCountry(data.code);
            setPhone(data.dial_code);
            getFlag(data.code).then(data=>setFlag(data))
        }).catch((error) => console.log(error.message))
    }, [])

   //Create validation object to pass data to pattern prop 
    const validation = {
        required: true,
        email: "[a-zA-Z0-9!#$%'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*",
        name: "[A-Za-zА-Яа-я]{2,}",
        phone:"[+]{1}[0-9]{1,4}[0-9]{3}[0-9]{2}[0-9]{4}"     
    }

    function handleChange(e) {
        const { name, value } = e.target;
       
        switch(name) {
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
                if (value === "") {
                    getLocation().then(data => setPhone(data));
                    return;
                }
                inputPhone.style.backgroundColor = "inherit"
                inputPhone.setCustomValidity("")
                setPhone(value);
                break;   
            default :
                return;
        }        
    }
    
    function handleSubmit(e) {
        e.preventDefault(); 
        
    //Additional validation that colors the background in tomato when something wrong    
        if (first_name.length >= 2 && last_name.length >= 2 && email.includes("@") && email.includes(".") && phone.length >= 9) {

            //Creating an object with contact information
            const data = { first_name, last_name, email, phone };
            localStorage.setItem("contact", JSON.stringify(data));
            alert("You have successfully registered")

            // Resetting the form input values
            reset();
        }
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
                <InputField id="name" title="Name" type="first_name" placeholder="First Name"
                    value={first_name} onChange={handleChange} pattern={validation.name}
                />
                <InputField id="surname"title="Last name" type="last_name" placeholder="Last Name"
                    value={last_name} onChange={handleChange} pattern={validation.name}
                />
                <InputField id="email" title="Email" type="email" placeholder="Email"
                    value={email} onChange={handleChange}
                    pattern={validation.email}
                />
                <InputField id="phone" title="Phone" type="phone" placeholder="Phone"
                    value={phone} onChange={handleChange} pattern={validation.phone} flag={flag}
                />
                <Button type="submit">Отправить</Button>
            </Form>
    </div>
)
}