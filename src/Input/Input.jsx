export default function InputField({ title, type, placeholder, value, onChange }={}) {
    return (
        <>
        <label className="form-label">
                    {title}
                    </label>
            <input className="form-control  mb-3" value={value} type={type} name={type} placeholder={placeholder} onChange={onChange} />
            </>
    )
 }