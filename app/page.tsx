import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCartFlatbedSuitcase, faCartShopping, faSearch, faSliders, faUser, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<>

			{/* nav */}
			<div className="container">
				<div className="w-100 p-5 d-flex justify-content-between align-items-center">
					<div className="d-flex justify-content-around align-items-center">
						<div className="me-3 fw-bold">Man</div>
						<div className="me-3 fw-bold">Woman</div>
						<div className="me-3 fw-bold">Sale</div>
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
							<FontAwesomeIcon icon ={ faUserCircle} />
						</div>
						<div className="me-2">
							<FontAwesomeIcon icon ={ faCartFlatbedSuitcase} />
						</div>
					</div>
				</div>
			</div>

			{/* body */}

			<div className="container">
				<div className="w-100">
					<div className="row m-0">
						<div className="col-6">
							<div>
								<p className="home_text_2">TRENDY COLLECTION'S</p>
								<p className="home_text_1">DRESSED TO BE NOTICED.</p>
								<p className="home_text_3">Discover What’s Trending – Shop the Look</p>

								<a href="#" className="btn btn-dark ">
									<p className="m-0">Start Shopping <FontAwesomeIcon icon ={faCaretRight} /></p>
								</a>
							</div>
						</div>
						<div className="col-6 ">
							<div className="relative ">
								<Image className="relative"
									src="/res_1.png"   // File in public/images/
									alt="My banner"
									width={600}
									height={600}
								/>
							</div>
							
						</div>
					</div>
				</div>

				{/* featured */}
				<div>
					<div className="row m-0">
						<div className="col-3">
							<Image className="relative"
									src="/res_2.png"   // File in public/images/
									alt=""
									width={200}
									height={200}
								/>
						</div>
						<div className="col">
							<p className="fw-bold"><FontAwesomeIcon icon={faSliders} /> FEATURED</p>
							<div className="row m-0">
								<div className="col-4">
									test
								</div>
								<div className="col-4">
									test
								</div>
								<div className="col-4">
									test
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
