import { useState } from "react";
import { loginUser } from "../services/authservices";
import {useNavigate} from "react-router-dom";
export const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        if(!email.trim() || !password){
            setError("Please fill all the details");
            return;
        }
        const formdata={
            email:email.trim(),
            password:password
        }
        try{
            await loginUser(formdata);
            navigate('/welcome')
        }
        catch(err){
            setError(err.response?.status===401?"Invalid Email or password":"Login failed!");
        }

    }
    return(
        <div className="container">
            <div className="forms">
                <form className="myform" onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    <br />
                    <label className="form-label">Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}