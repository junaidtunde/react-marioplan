import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedOutLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/sign-up">Signup</NavLink></li>
            <li><NavLink to="/sign-in">Login</NavLink></li>
        </ul>   
    )
}
