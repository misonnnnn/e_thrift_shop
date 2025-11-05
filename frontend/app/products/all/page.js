import "./../../css/products.css";
import Image from "next/image";
import Link from "next/link";

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
                
            </div>
        </>
    );
}