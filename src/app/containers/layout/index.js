import React from 'react'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'
import LogIn from '../../containers/logIn'
import SignUp from '../../containers/signUp'
import PrivacyPolicyPopup from '../policy/policy'
import './main.css'

const Layout = ({children}) => (

<div>
    <SignUp />
    <LogIn />
    <PrivacyPolicyPopup />
    <Navbar />

    <div className='view-container'>

        <div className='container'>
            <div className='row'>


                <div className='col-md-3'>

                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
</div>
);

export  default Layout;

