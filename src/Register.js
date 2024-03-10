import React, { useState } from 'react';
import './App.css';
import social from "./img/social.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Register() {

    const navigate = useNavigate();
    const [data,setData]=useState({email:"",password:""})

const handleChange=(e)=>{
    e.preventDefault()
     setData((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(data)
    }

    const handleRegister= async ()=>{
        try{
            await axios.post("http://localhost:3500/insert",data)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
            <section className='sec_a'>
                <div className='container'>
                    <div className='row'>
                        <div className='col col_a'>
                        <img src={social} alt="Girl in a jacket" width="100%" />
                        </div>
                        <div className='col  col_b'>
                           
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" name="email" onChange={handleChange} class="form-control" id="email" placeholder="Enter Email"/>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Enter password</label>
                                    <input type="password" name="password" onChange={handleChange} class="form-control" id="password" placeholder="Enter password"/>
                                </div>
                                
                    <button  className='mt-2 btn btn-primary col-12'  onClick={handleRegister}>Register</button>
                    {/* <Link to="/"></Link> */}
                            

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}


export default Register;