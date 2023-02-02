import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [subscribe, setSubscribe] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const error = [];

        if (!name) error.push('Please enter your name')
        if (!email.includes('@')) error.push('Please provide a valid email')
        if (!phone) error.push('Phone number should be properly formatted')
        if (!phoneType) error.push('Please input a phone type')
        if (bio.length > 280) error.push('Bio cannot reach 280 characters')

        setValidationErrors(error)

    }, [name, email, phone, phoneType, bio])

    const onSubmit = e => {
        console.log("test")
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert('Cannot Submit')

        const contactInfromation = {
            name,
            email,
            phone,
            phoneType,
            bio,
            staff,
            subscribe,
            submittedOn: new Date()
        }

        console.log(contactInfromation);
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setBio('');
        setStaff('')
        setSubscribe('')
        setValidationErrors([]);
        setHasSubmitted(false);
    }

    return (
        <div>
            <h1>User registration</h1>
            {hasSubmitted && validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name: </label>
                    <input value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Phone: </label>
                    <input value={phone} onChange={e => setPhone(e.target.value)}></input>
                </div>
                <div>
                    <label>PhoneType: </label>
                    <select value={phoneType} onChange={e => setPhoneType(e.target.value)}>
                        <option>Cell</option>
                        <option>Work</option>
                        <option>Home</option>
                    </select>
                </div>
                <div>
                    <label>Staff: </label>
                    <input value={staff} type="radio" onChange={e => setStaff(e.target.value)}></input>
                </div>
                <div>
                    <label>Bio: </label>
                    <textarea value={bio} onChange={e => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Sign Up for email notifications: </label>
                    <input value={subscribe} type="checkBox" onChange={e => setSubscribe(e.target.value)}></input>
                </div>
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
