export default function InputField({ id, title, type, placeholder, value, onChange, pattern = {}, flag } = {}) {
    function ValidityCheck() {
        const input = document.getElementById(`${id}`);
        const nameMessage = "Should contain at least 2 characters, no numbers";
        const emailMessage = "Should contain @ and .";
        const phoneMessage = "Should contain + and be at least 9 numbers long"
        if (input.id === "name" || input.id === "surname") {
            input.setCustomValidity(nameMessage)
        } else if (input.id === "email") {
            input.setCustomValidity(emailMessage)
        } else {
            input.setCustomValidity(phoneMessage)
        }
        input.style.backgroundColor="tomato"
    }

    return (
        <>
            <div className="input-container">
                <label className="form-label w-100">
                    {title}
                    
            <input
                id = {id}
                className="form-control  mb-3 position-relative" 
                value={value} type={type} name={type}
                placeholder={placeholder} onChange={onChange}
                onInvalid={ValidityCheck}
                pattern={pattern} required autoComplete="off"
            />
                </label>
                {flag && <div className="flag"><img className="flag" src={flag} alt="flag of the country" /></div>}
            </div>
            </>
    )
 }