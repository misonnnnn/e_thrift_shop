import "./../shop.css";
import Image from "next/image";
import Link from "next/link";

export default function shopPage(){
    return (
        <>
            <div className="container">
                <nav aria-label="breadcrumb" className="mt-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item "><Link className = "text-dark" href= "/">Home</Link></li>
                        <li className="breadcrumb-item">Shop (All Products)</li>
                    </ol>
                </nav>
                <div className="main_banner shadow position-relative  d-flex align-items-center">
                    <div className="px-5">
                        <h2>20% OFF ONLY TODAY AND GET SPECIAL GIFT!</h2>
                        <p className="text-muted m-0">Today only, enjoy stylish 20% off and receive an exclusive gift!</p>
                        <p className="text-muted m-0">Elevate your wardrobe now!</p>
                    </div>
                    <Image 
                        src="/shop/main_banner.png"
                        height={350}
                        width={300}
                        className="position-absolute end-0 me-5 bottom-0"
                    ></Image>
                </div>
                <div>Hello, this is a shopping page</div>
            </div>
        </>
    );
}