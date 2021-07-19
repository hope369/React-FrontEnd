import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 my-3">
                    <h3 className="text-center heading">Getting Started</h3>
                    <h6 className="text-center heading" style={{color: "grey"}}>Create an account to continue!</h6>
                </div>
                <div className="col-md-12 d-flex justify-content-center"> <a className="btn btn-lg btn-google btn-block btn-outline" style={{color: "grey"}}><img src="https://img.icons8.com/color/16/000000/google-logo.png"/> Sign In with Google</a> </div>
                <div className="or-container">
                    <div className="line-separator"></div>
                    <p className="or">OR</p>
                    <div className="line-separator"></div>
                </div>
            </div>
        )
    }
}
