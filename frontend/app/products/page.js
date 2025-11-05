import "./../css/products.css";
import Image from "next/image";
import Link from "next/link";

export default function shopPage(){
    return (
        <>
            <div className="container">
                {/* breadcrumb */}
                <div className="mt-5 py-2">
                    <div><Link className = "text-dark" href= "/">Home</Link> &gt; Shop</div>
                </div>
                <div className="row mt-5">
                    <div className="col-3">
                        <Link href="/products/all" className="text-dark text-decoration-none">
                            <div className="border border-2 rounded-3 p-3 text-center">
                                All Products
                            </div>
                        </Link>
                    </div>

                    <div className="col-3">
                        <Link href="/products/all" className="text-dark text-decoration-none">
                            <div className="border border-2 rounded-3 p-3 text-center">
                                Man
                            </div>
                        </Link>
                    </div>

                    <div className="col-3">
                        <Link href="/products/all" className="text-dark text-decoration-none">
                            <div className="border border-2 rounded-3 p-3 text-center">
                                Woman
                            </div>
                        </Link>
                    </div>

                    <div className="col-3">
                        <Link href="/products/all" className="text-dark text-decoration-none">
                            <div className="border border-2 rounded-3 p-3 text-center">
                                Sale
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}