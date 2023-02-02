import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("");
    const [bio, setBio] = useState("");
    const [subscribe, setSubscribe] = useState("");


    return (
        <div>
            <h1>User registration</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input></input>
                </div>
                <div>
                    <label>Phone: </label>
                    <input></input>
                </div>
                <div>
                    <label>PhoneType: </label>
                    <select>
                        <option>Cell</option>
                        <option>Work</option>
                        <option>Home</option>
                    </select>
                </div>
                <div>
                    <label>Staff: </label>
                    <input type="radio"></input>
                </div>
                <div>
                    <label>Bio: </label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Sign Up for email notifications: </label>
                    <input type="checkBox"></input>
                </div>
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Form
