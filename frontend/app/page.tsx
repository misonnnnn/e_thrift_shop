"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCartFlatbedSuitcase, faCartShopping, faSearch, faSliders, faUser, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";


export default function Home() {
	const { isLoggedIn, user, logout } = useContext(AuthContext);

	const [navbarActive , setNavbarActive ] = useState(false);
	const [ accountSideBarActive, setAccountSideBarActive ] = useState(false)
	if (isLoggedIn && !user ) {
		return <div>Loading...</div>; // prevent stale render
	}
	return (
		<>

			{/* nav */}
			<div className="container ">
				<div className="w-100 pt-3">
					<div>
						<h4 className="website-name text-center">E-ThriftShop</h4>
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

						<div className="me-3 main_menu_link fw-bold">
							<Link className="text-dark" href="/products/category/man">Man</Link>
							<hr className="d-block d-md-none text-light " />
						</div>
						<div className="me-3 main_menu_link fw-bold">
							<Link className="text-dark" href="/products/category/woman">Woman</Link>
							<hr className="d-block d-md-none text-light" />
						</div>
						<div className="me-3 main_menu_link fw-bold">
							<Link className="text-dark" href="/products/category/sale">Sale</Link>
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
										<div>
											<Link className="text-light" href="/auth/login">Login</Link>
										</div> 
										<div>
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
								<div className="me-3 account_sidebar_link fw-bold text-light" onClick={logout}>
									Logout
								</div>
							</>

							: ``
						}
					</div>
				</div>
			</div>

			{/* body */}

			<div className="container ">
				<div className="w-100">
					<div className="row m-0">
						<div className="col-lg-6 col-md-12">
							<div>
								<p className="home_text_2">TRENDY COLLECTION'S</p>
								<p className="home_text_1">DRESSED TO BE NOTICED.</p>
								<p className="home_text_3">Discover What’s Trending – Shop the Look</p>

								<a href="#" className="btn btn-dark ">
									<p className="m-0">Start Shopping <FontAwesomeIcon icon ={faCaretRight} /></p>
								</a>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="relative ">
								<Image className="relative"
									src="/main_res.png"   // File in public/images/
									alt="My banner"
									width={600}
									height={600}
									 style={{ width: "100%", height: "auto" }}
								/>
							</div>
							
						</div>
					</div>
				</div>

				{/* featured */}
				<div>
					<p className="fw-bold"><FontAwesomeIcon icon={faSliders} /> FEATURED</p>
					<div className="featured_product_outerdiv border-radius-top-left-20 p-3">
						<div className="row m-0">
							<div className="col-lg-4 col-md-4 col-sm-12 position-relative py-3">
								<div className="d-flex justify-content-center">
									<div className="position-relative">
										<div className="featured_product_backdesign1"></div>
										<Image className="featured_product_image"
											src="/featured_products/2.png"   // File in public/images/
											alt=""
											width={150}
											height={150}
										/>
									</div>
									<div className="featured_product_details align-items-center d-flex">
										<div>
											<p className="featured_product_text">HOODIE</p>
											<div className="featured_product_text_subtext">See All</div>
										</div>
									</div>
								</div>

								<div className="featured_product_vertical_line d-none d-lg-block"></div>
							</div>

							<div className="col-lg-4 col-md-4 col-sm-12 position-relative py-3">
								<div className="d-flex justify-content-center">
									<div className="position-relative">
										<div className="featured_product_backdesign1"></div>
										<Image className="featured_product_image"
											src="/featured_products/2.png"   // File in public/images/
											alt=""
											width={150}
											height={150}
										/>
									</div>
									<div className="featured_product_details align-items-center d-flex">
										<div>
											<p className="featured_product_text">HOODIE</p>
											<div className="featured_product_text_subtext">See All</div>
										</div>
									</div>
								</div>

								<div className="featured_product_vertical_line d-none d-lg-block"></div>
							</div>
							

							<div className="col-lg-4 col-md-4 col-sm-12 position-relative py-3">
								<div className="d-flex justify-content-center">
									<div className="position-relative">
										<div className="featured_product_backdesign1"></div>
										<Image className="featured_product_image"
											src="/featured_products/2.png"   // File in public/images/
											alt=""
											width={150}
											height={150}
										/>
									</div>
									<div className="featured_product_details align-items-center d-flex">
										<div>
											<p className="featured_product_text">HOODIE</p>
											<div className="featured_product_text_subtext">See All</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
