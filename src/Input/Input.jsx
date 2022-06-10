export default function InputField({ id,title, type, placeholder, value, onChange, pattern={} }={}) {
    return (
        <>
        <label className="form-label">
                    {title}
                    </label>
            <input
                id = {id}
                className="form-control  mb-3" 
                value={value} type={type} name={type}
                placeholder={placeholder} onChange={onChange}
                pattern={pattern} required autoComplete="off"
            />
            </>
    )
 }