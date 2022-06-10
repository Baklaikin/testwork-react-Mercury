import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputField from "../Input/Input";
import getLocation from "../Api/api";

export default function FormTable() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        getLocation().then(data => setPhone(data))
    },[])

    function handleChange(e) {
        const { name, value } = e.target;
        switch(name) {
            case "name":
                setName(value);
                break;
            case "lastName":
                setLastName(value);
                console.log("is set");
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                if (value === "") {
                    getLocation().then(data => setPhone(data));
                    return;
                }
                setPhone(value);
                break;   
            default :
                return;
        }
        console.log("in handle:",  name)
        console.log("in handle:",value)
        
    }

    return (
        <div>
            <Form className="display-flex flex-direction-column">
                <InputField title="Name" type="name" placeholder="First Name" value={name} onChange={handleChange} />
                <InputField title="Last name" type="lastName" placeholder="Last Name" value={lastName} onChange={handleChange}/>
                <InputField title="Email" type="email" placeholder="Email" value={email} onChange={handleChange}/>
                <InputField title="Phone" type="phone" placeholder="Phone" value={phone} onChange={handleChange}/>
                <Button type="submit">Отправить</Button>
            </Form>
    </div>
)
}