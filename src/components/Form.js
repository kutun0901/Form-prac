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
        if (!isNaN(phone)) error.push('Phone number should be properly formatted')
        if (!phoneType) error.push('Please input a phone type')
        if (bio.length > 280) error.push('Bio cannot reach 280 characters')

        setValidationErrors(error)

    }, [name, email, phone, phoneType, bio])

    const onSubmit = e => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert('Cannot Submit')

        const contactInfromation = {
            name,
            email,
            phone,
            phoneType,
            bio,
            submittedOn: new Date()
        }

        console.log(contactInfromation);
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setBio('');
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
                    <input onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label onChange={e => setEmail(e.target.value)}>Email: </label>
                    <input ></input>
                </div>
                <div>
                    <label>Phone: </label>
                    <input onChange={e => setPhone(e.target.value)}></input>
                </div>
                <div>
                    <label>PhoneType: </label>
                    <select onChange={e => setPhoneType(e.target.value)}>
                        <option>Cell</option>
                        <option>Work</option>
                        <option>Home</option>
                    </select>
                </div>
                <div>
                    <label>Staff: </label>
                    <input type="radio" onChange={e => setStaff(e.target.value)}></input>
                </div>
                <div>
                    <label>Bio: </label>
                    <textarea onChange={e => setBio(e.target.value)}></textarea>
                </div>
                <div>
                    <label>Sign Up for email notifications: </label>
                    <input type="checkBox" onChange={e => setSubscribe(e.target.value)}></input>
                </div>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Form
