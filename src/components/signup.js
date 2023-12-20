import React from "react";

const signup = () => {
    return (
        <>
        <div className="my-modal">
            <form className="BOXXX my-bottom-50 down-4 off-4">
                <div className="login-text">CREATE YOUR ACCOUNT</div>
                <label>
                    <input className="inputemail down-2"
                     type="text"
                     placeholder="First Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail inputtext down-3"
                     type="text"
                     placeholder="Middle Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="text"
                     placeholder="Last Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="text"
                     placeholder="Email Address"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="tel"
                     placeholder="Phone Number"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="password"
                     placeholder="Password"
                    />
                </label>
                <br/>
                <button className="button down-3 centerr" type="button">
                    Create My Account
                </button>
            </form>

        </div>
        
        </>
    )
}

export default signup;