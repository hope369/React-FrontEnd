import React, { Component } from 'react'
import SubmitButton from './SubmitButton';

export default class Account extends Component {

    render() {
        return (
            <div className="row">
                <div className="inputBox" style={{borderColor: "red"}}> <input type="text" className="i" name="first_name" value="" placeholder="@ Your Email"/> </div>
                <div className="alertBox">
                    <span className="alert">Please enter a valid email address</span>
                </div>
                <div className="inputBox mt-3"><i className="fa fa-lock icon"></i> <input type="password" className="i pwInput" name="password" placeholder="Create Password" style={{marginLeft: "1%"}}/><i className="fa fa-eye icon eIcon"></i> </div>
                <p className="text-center fgtPw">Forget Password? <a style={{textDecoration: "none"}}>Reset</a></p>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center" style={{fontSize: "80%"}}>By signing in you agree to the <a>Terms & Conditions</a></p>
                        <div className="d-flex justify-content-center">
                            <input type="submit" className=" btnSubmit" value="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
