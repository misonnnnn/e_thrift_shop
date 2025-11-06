"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faSliders   } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";


export default function Home() {
	const { isLoggedIn, user, logout } = useContext(AuthContext);

	if (isLoggedIn && !user ) {
		return <div>Loading...</div>; // prevent stale render
	}
	return (
		<>
			<div className="container ">
				<div className="w-100">
					<div className="row m-0">
						<div className="col-lg-6 col-md-12">
							<div>
								<p className="home_text_2">TRENDY COLLECTION'S</p>
								<p className="home_text_1">DRESSED TO BE NOTICED.</p>
								<p className="home_text_3">Discover What’s Trending – Shop the Look</p>

								<Link href ="/products/sale" className="btn btn-dark">
									<p className="m-0">Start Shopping <FontAwesomeIcon icon ={faCaretRight} /></p>
								</Link>
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
