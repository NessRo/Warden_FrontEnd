import React, {useState} from 'react'
import { Link, Router } from 'react-router-dom'
import {AdminData, SidebarData} from './AdminData'

const Admin = () => {



    return(
        
        <div className="admin">
            <h1>Admin</h1>
            <ul className='nav-menu-items'>
            {AdminData.map((item, index) => {
                    return (
                        <li key = {index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
    }

    


export default Admin;