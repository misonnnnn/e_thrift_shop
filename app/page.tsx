import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCartFlatbedSuitcase, faCartShopping, faSearch, faSliders, faUser, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
	return (
		<>

			{/* nav */}
			<div className="container ">
				<div className="w-100 py-3 px-lg-5 px-md-3 px-sm-0 px-0 d-flex justify-content-between align-items-center">
					<div className="main_menu d-flex justify-content-around align-items-center">
						<div className="me-3 fw-bold">
							<Link className="text-dark" href="/products/category/man">Man</Link>
						</div>
						<div className="me-3 fw-bold">
							<Link className="text-dark" href="/products/category/woman">Woman</Link>
						</div>
						<div className="me-3 fw-bold">
							<Link className="text-dark" href="/products/category/sale">Sale</Link>
						</div>
					</div>

					<div className="me-3 hamburger_menu">
						<div className="hamburger_menu_line hamburger_menu_line1"></div>
						<div className="hamburger_menu_line hamburger_menu_line2"></div>
						<div className="hamburger_menu_line hamburger_menu_line3"></div>
					</div>

					<div>
						<h4 className="website-name">E ThriftShop</h4>
					</div>

					<div className="d-flex justify-content-around align-items-center">
						<div className="d-flex justify-content-around align-items-center me-2">
							<input type="search" className="me-2 form-control form-control-sm" />
							<FontAwesomeIcon icon={faSearch} />
						</div>
						<div className="me-2">
							<Link className="text-dark" href="/auth/login"><FontAwesomeIcon icon ={ faUserCircle } /></Link>
						</div>
						<div className="me-2">
							<FontAwesomeIcon icon ={ faCartFlatbedSuitcase} />
						</div>
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
									src="/res_main.png"   // File in public/images/
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
					<div className="row m-0">
						<div className="col-2 position-relative">
							<Image className="position-relative mt-5"
									src="/res_2.png"   // File in public/images/
									alt=""
									width={200}
									height={200}
								/>
						</div>
						<div className="col">
							<p className="fw-bold"><FontAwesomeIcon icon={faSliders} /> FEATURED</p>
							<div className="featured_product_outerdiv border-radius-top-left-20 p-3">
								<div className="row m-0">
									<div className="col-lg-4 position-relative py-3">
										<div className="d-flex border-end border-1 border-light">
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
									

									<div className="col-lg-4 position-relative py-3">
										<div className="d-flex">
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
				</div>
			</div>
		</>
	);
}
