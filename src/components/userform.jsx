import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const handleFirstName = (e) => {
    setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if (e.target.value.length < 3) {
            setFirstNameError("First Name must be 2 characters or longer!")
        }
    }

    const handleLastName = (e) => {
    setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("First Name is required!");
        } else if (e.target.value.length < 3) {
            setLastNameError("First Name must be 2 characters or longer!")
        }
    }

    const handleEmail = (e) => {
    setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 3) {
            setEmailError("Email must be 2 characters or longer!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
            if(e.target.value.length < 1) {
                setPasswordError("Password is required!");
            } else if (e.target.value.length < 3) {
                setPasswordError("Password must be 2 characters or longer!");
            }
        }

    const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("ConfirmPassword is required!");
        } else if (e.target.value.length < 3) {
            setConfirmPasswordError("ConfirmPassword must be 2 characters or longer!");
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
        { 
            hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3>
        }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } value={firstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}> { firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={lastName} />
                {   
                    lastNameError ?
                    <p style={{color:'red'}}> { lastNameError }</p> :
                    ''
                }  
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail} value={email} />
                {   
                    emailError ?
                    <p style={{color:'red'}}> { emailError }</p> :
                    ''
                }  
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } value={password} />
                {   
                    passwordError ?
                    <p style={{color:'red'}}> { passwordError }</p> :
                    ''
                }  
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } value={confirmPassword} />
                {   
                    confirmPasswordError ?
                    <p style={{color:'red'}}> { confirmPasswordError }</p> :
                    ''
                } 
            </div>
            <input type="submit" value="Create User" />
        </form>
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>confirm password: {confirmPassword}</p>

        </div>
    </>
    );


};
    
export default UserForm;