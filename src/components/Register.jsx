import { useState } from "react";
import {registerUser} from "../services/authservices"
import { useNavigate } from "react-router-dom";
export const Register=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        setError("");
        if(!name.trim() || !email.trim() || !password){
            setError("Please fill all the details");
            return;
        }
        try{
            const formdata={
                name:name.trim(),
                email:email.trim(),
                password:password
            };
            await registerUser(formdata);
        navigate('/login');
        }
        catch(err){
            setError("Failed to add student");
            console.log(err);
        }
       

    }
    return(
        <div className="container">
            <div className="forms">
                <h1>Register</h1>
                
                <form className="myform" onSubmit={handleSubmit}>
                    {error && <p className="error">{error}</p>}
                    <label className="form-label">Name</label>
                    
                    <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}} required />
                    <label className="form-label">Email</label>
                    
                    <input type="email" placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}} required />
                    <label className="form-label">Password</label>
                    
                    <input type="password" placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}} required />
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>

        </div>
    )
}