import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputField from "../Input/Input";
import getLocation from "../Api/api";

export default function FormTable() {
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const inputName = document.querySelector("#name");
    const inputLastName = document.querySelector("#surname");
    const inputEmail = document.querySelector("#email");
    const inputPhone = document.querySelector("#phone");

    useEffect(() => {
        getLocation().then(data => setPhone(data))
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
                inputName.classList.remove("validation");
                setFirst_Name(value);
                break;
            case "last_name":
                setLast_Name(value);
                inputLastName.classList.remove("validation")
                break;
            case "email":
                setEmail(value);
                inputEmail.classList.remove("validation")
                break;
            case "phone":
                if (value === "") {
                    getLocation().then(data => setPhone(data));
                    return;
                }
                setPhone(value);
                  inputPhone.classList.remove("validation")
                break;   
            default :
                return;
        }        
    }
    
    function handleSubmit(e) {
        e.preventDefault(); 
        
    //Additional validation that colors the background in tomato when something wrong    
        if (first_name.length < 3) {
            inputName.classList.add("validation");
            return;
        }
        if (last_name.lenght < 3) {
            inputLastName.classList.add("validation");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            inputEmail.classList.add("validation");
            return;
        }
        if (phone.length < 9) {
            inputPhone.classList.add("validation");
            return;
        }

    //Creating an object with contact information     
        const data = { first_name, last_name, email, phone };
        localStorage.setItem("contact", JSON.stringify(data));
        alert("You have successfully registered")

    // Resetting the form input values
        reset();
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
                    value={phone} onChange={handleChange} pattern={validation.phone}
                />
                <Button type="submit">Отправить</Button>
            </Form>
    </div>
)
}