import "./../../css/products.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown, faSliders   } from "@fortawesome/free-solid-svg-icons";

export default function ProductPage(){
    return (
        <>
            <div className="container">
                {/* breadcrumb */}
                <div className="mt-5 py-2">
                    <div><Link className = "text-dark" href= "/">Home</Link> &gt; All Products</div>
                </div>
                <div className="main_banner shadow position-relative  d-flex align-items-center justify-content-between">
                    <div className="px-5 banner_details">
                        <h2>20% OFF ONLY TODAY AND GET SPECIAL GIFT!</h2>
                        <p className="text-muted m-0">Today only, enjoy stylish 20% off and receive an exclusive gift!</p>
                        <p className="text-muted m-0">Elevate your wardrobe now!</p>
                    </div>
                    <div className="position-relative end-0 bottom-0 main_image_outer">
                        <Image 
                            alt="all_products_main_banner.png"
                            src="/shop/main_banner.png"
                            height={100}
                            width={230}
                            className="w-full h-auto object-cover"
                        ></Image>
                    </div>
                    
                </div>

                <div className="mt-5  fs_small">
                    <span className="p-2 d-inline d-xl-none border rounded-2 p-2 ">
                        <FontAwesomeIcon icon={faSliders} />
                    </span>
                    <div className="row w-100">
                        <div className="col d-none d-xl-block">
                            <div className="border rounded-4 p-4" >
                                <div>
                                    <p className="fw-bold">Filter Products</p>
                                </div>

                                <div className="p-2 mb-2">
                                    <div className="cursor-pointer d-flex justify-content-between">
                                        <span>Category</span> <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>

                                <div className="p-2 mb-2">
                                    <div className="cursor-pointer d-flex justify-content-between">
                                        <span>Fashion</span> <FontAwesomeIcon icon={faChevronDown} />
                                    </div>

                                    <div className="px-3">
                                        <div className="cursor-pointer d-flex justify-content-between p-1">
                                            <div>
                                                <input type="checkbox" />
                                                <span className="ms-2 text-muted">Jackets & Coats</span>
                                            </div>
                                            <span>127</span>
                                        </div>
                                        <div className="cursor-pointer d-flex justify-content-between p-1">
                                            <div>
                                                <input type="checkbox" />
                                                <span className="ms-2 text-muted">T-Shirts</span>
                                            </div>
                                            <span>68</span>
                                        </div>
                                        <div className="cursor-pointer d-flex justify-content-between p-1">
                                            <div>
                                                <input type="checkbox" />
                                                <span className="ms-2 text-muted">Shorts</span>
                                            </div>
                                            <span>34</span>
                                        </div>
                                        <div className="cursor-pointer d-flex justify-content-between p-1">
                                            <div>
                                                <input type="checkbox" />
                                                <span className="ms-2 text-muted">Pants</span>
                                            </div>
                                            <span>9</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-2 mb-2">
                                    <div className="cursor-pointer d-flex justify-content-between">
                                        <span>Shoes</span> <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>

                                <div className="p-2 mb-2">
                                    <div className="cursor-pointer d-flex justify-content-between">
                                        <span>Bag</span> <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>

                                <div className="p-2 mb-2">
                                    <div className="cursor-pointer d-flex justify-content-between">
                                        <span>Accessories</span> <FontAwesomeIcon icon={faChevronDown} />
                                    </div>
                                </div>
                            </div>        
                        </div>

                        <div className="col-xl-9 col-lg-11 col-md-11">
                            <div className="w-100 d-flex justify-content-between py-2 ">
                                <div>
                                    <p>Showing <b>12</b> results from total <b>127</b> for "Jackets & Coats"</p>
                                </div>
                                <div>
                                    <span className="text-muted me-3">Sort By</span>
                                    <span className="fw-bold">Popularity <FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}