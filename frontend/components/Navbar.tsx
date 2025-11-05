// components/Navbar.tsx
"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {  useState } from "react";
import {  faCartFlatbedSuitcase,  faSearch,  faUser, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";


export default function Navbar() {
const { isLoggedIn, user, logout } = useContext(AuthContext);
const [navbarActive , setNavbarActive ] = useState(false);
const [ accountSideBarActive, setAccountSideBarActive ] = useState(false)

  return (
    <div className="container ">
        <div className="w-100 pt-3">
            <div>
                <h4 className="website-name text-center"><Link className="text-dark" href="/">E-ThriftShop</Link></h4>
            </div>
        </div>
        <div className="w-100 py-3 px-lg-5 px-md-3 px-sm-0 px-0 d-flex justify-content-between align-items-center">
            <div className="me-3 hamburger_menu" onClick={ () => [setNavbarActive(true), setAccountSideBarActive(false)]}>
                <div className="hamburger_menu_line hamburger_menu_line1"></div>
                <div className="hamburger_menu_line hamburger_menu_line2"></div>
                <div className="hamburger_menu_line hamburger_menu_line3"></div>
            </div>

            <div className={ `main_menu d-flex justify-content-around align-items-center ` + (navbarActive ? `d-block start-0` : '') }>
                <div className="me-3 hamburger_menu_close" onClick={ () => setNavbarActive(false)}>
                    <div className="hamburger_menu_close_line hamburger_menu_close_line1"></div>
                    <div className="hamburger_menu_close_line hamburger_menu_close_line2"></div>
                </div>
                
                <div className="me-3 main_menu_link fw-bold" onClick={ () => setNavbarActive(false)}>
                    <Link className="text-dark" href="/products/all">All Products</Link>
                    <hr className="d-block d-md-none text-light " />
                </div>
                <div className="me-3 main_menu_link fw-bold" onClick={ () => setNavbarActive(false)}>
                    <Link className="text-dark" href="/products/man">Man</Link>
                    <hr className="d-block d-md-none text-light " />
                </div>
                <div className="me-3 main_menu_link fw-bold" onClick={ () => setNavbarActive(false)}>
                    <Link className="text-dark" href="/products/woman">Woman</Link>
                    <hr className="d-block d-md-none text-light" />
                </div>
                <div className="me-3 main_menu_link fw-bold" onClick={ () => setNavbarActive(false)}>
                    <Link className="text-dark" href="/products/sale">Sale</Link>
                </div>
            </div>

            <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex justify-content-around align-items-center me-2">
                    <input type="search" className="me-2 form-control form-control-sm shadow-none" placeholder="Search product here" />
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="me-2">
                    <FontAwesomeIcon icon ={ faCartFlatbedSuitcase} />
                </div>
                <div className="me-2" onClick={ () => [setAccountSideBarActive(true) , setNavbarActive(false)]}>
                    <FontAwesomeIcon icon ={ faUserCircle } />
                </div>
            </div>

            {/* account sidebar */}

            <div className={ `account_sidebar d-flex justify-content-around align-items-center ` + ( accountSideBarActive ? `end-0` : `` )}>
                <div className="me-3 hamburger_account_sidebar_close" onClick={ () => setAccountSideBarActive(false)}>
                    <div className="hamburger_account_sidebar_close_line hamburger_account_sidebar_close_line1"></div>
                    <div className="hamburger_account_sidebar_close_line hamburger_account_sidebar_close_line2"></div>
                </div>

                <div className="text-light ">
                    <div className="m-0 text-uppercase fw-bold">
                        { 
                            isLoggedIn ? <div><FontAwesomeIcon icon ={ faUserCircle } /> {user?.username} </div> : 
                            
                            <>
                                <div onClick={ () => setAccountSideBarActive(false)}>
                                    <Link className="text-light" href="/auth/login">Login</Link>
                                </div> 
                                <div onClick={ () => setAccountSideBarActive(false)}>
                                    <Link className="text-light" href="/auth/register">{user?.username}Register</Link>
                                </div> 
                            </>
                        }
                    </div>
                    <span className="text-light-1 fs_small">{ user?.email }</span>
                </div>
                

                
                { isLoggedIn ? 
                    <>
                        <div className="me-3 mt-5 account_sidebar_link text-light fw-bold">
                            <Link className="text-dark" href="/user/profile">Profile</Link>
                            <hr className="d-block text-light " />
                        </div>
                        <div className="me-3 account_sidebar_link fw-bold text-light cursor-pointer" onClick={logout}>
                            Logout
                        </div>
                    </>

                    : ``
                }
            </div>
        </div>
    </div>
  );
}
