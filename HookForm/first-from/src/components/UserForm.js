import React,{useState} from 'react';

const UserForm = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    return (
        <div>
            <form>
                <label htmlFor="">First Name:</label>
                <input onChange = {(events)=>setFname(events.target.value)} type="text" /><br />
                {fname.length < 3 || fname.length>20?
                    <p>Name must be between 3-20 characters.</p>
                    :"" }
                <label htmlFor="">Last Name:</label>
                <input onChange = {(events)=>setLname(events.target.value)} type="text" /><br />
                {lname.length < 3 || lname.length>20?
                    <p>Name must be between 3-20 characters.</p>
                    :"" }
                <label htmlFor="">Email:</label>
                <input onChange = {(events)=>setEmail(events.target.value)} type="text" /><br />
                {email.length < 1? <p>Email is required!</p>:""}
                <label htmlFor="">Password</label>
                <input onChange = {(events)=>setPassword(events.target.value)} type="password" /><br />
                {password.length < 1? <p>Password must be atleast 8 characters </p>:""}
                <label htmlFor="">Confirm Password</label>
                <input onChange = {(events)=>setCpassword(events.target.value)} type="password" /><br />
                <input type="submit" />
            </form>
            <hr />
            <h1>User Info:</h1>
            Name: {fname} {lname} <br />
            Email: {email} <br />
            Password: {password} <br />
            Confirm Password: {cpassword}

        </div>
    );
};

export default UserForm;
