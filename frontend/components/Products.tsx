import { faChevronDown, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductsProp = {
    section: string
}

type Product = {
    id: number;
    name: string;
    price: number;
    image?: string; 
};

type Category ={
    id: number,
    children: any[],
    name: string
}


export default function Products({section} : ProductsProp){
    const [ categories, setCategories] = useState([]);
    const [ products, setProducts] = useState([]);
    const [ categoryIds, setCategoryIds] = useState<number[]>([]);
    const [ activeDropDownCategoryID, setActiveDropDownCategoryID ] = useState<number | null>(null);
    
    useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/category`, {
            method: "GET"
        })
        .then(res => res.json())
        .then((data)=>{
            if(data.success){
                setCategories(data.data)
                
                if(data.data[0]){
                    setActiveDropDownCategoryID(data.data[0]['id'])
                }
            }
        }).catch((error) => {
            console.error("Error fetching categories:", error);
        });

    }, []);

    const handleCategoryDropdown = (categoryID: number) =>{
        setActiveDropDownCategoryID((prev) =>{
            return prev == categoryID ? null : categoryID
        })
    }

    useEffect( ()=>{
        const params = new URLSearchParams();

        if (categoryIds.length > 0){
            params.append("category_ids", categoryIds.join(','));
        }

        if(section){
            params.append("section", section);
        }

        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product?${params.toString()}`, {
            method: "GET"
        })
        .then(res => res.json())
        .then((data)=>{
            if(data.success){
                setProducts(data.data)
            }
        }).catch((error) => {
            console.error("Error fetching categories:", error);
        });
    }, [categoryIds])

    const handleCategoryCheckboxChange = (categoryId: number) => {
        setCategoryIds((prev) => {
            // If category is already selected → remove it
            if (prev.includes(categoryId)) {
            return prev.filter((id) => id !== categoryId);
            }

            // Else → add it
            return [...prev, categoryId];
        });
    };

    return (
        <>
            <div className="container">
                {/* breadcrumb */}
                <div className="mt-5 py-2">
                    <div><Link className = "text-dark" href= "/">Home</Link> &gt; Sale</div>
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

                <div className="mt-5  fs_small w-100 ">
                    <span className="p-2 d-inline d-xl-none border rounded-2 p-2 ">
                        <FontAwesomeIcon icon={faSliders} />
                    </span>
                    <div className="row w-100  m-0">
                        <div className="col d-none d-xl-block">
                            <div className="border rounded-4 p-4" >
                                <div>
                                    <p className="fw-bold">Filter Products</p>
                                </div>
                                {
                                    categories.map((category : Category)=>{
                                        const childCategory = category.children || []
                                        return (
                                             <div className="p-2 mb-2" key={category.id}>
                                                <div className="cursor-pointer d-flex justify-content-between" onClick={ () => handleCategoryDropdown(category.id)}>
                                                    <span>{category['name']}</span> <FontAwesomeIcon icon={faChevronDown} />
                                                </div>
                                                {
                                                    childCategory.length > 0 && (
                                                        <div className={`px-3 ${activeDropDownCategoryID == category.id ? 'd-block' : 'd-none'}`}>
                                                        {
                                                            childCategory.map(childCategory =>{
                                                                return (
                                                                    <div className={`cursor-pointer d-flex justify-content-between overflow-hidden  p-1`} key={childCategory.id} >
                                                                        <div className="d-flex align-items-center">
                                                                            <input 
                                                                                type="checkbox" 
                                                                                id={childCategory.id} 
                                                                                checked={categoryIds.includes(childCategory.id)}
                                                                                onChange={() => handleCategoryCheckboxChange(childCategory.id)}
                                                                            />
                                                                            <label htmlFor={childCategory.id} className="ms-2 text-muted" >{childCategory.name}</label>
                                                                        </div>
                                                                        <span>0</span>
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        );
                                    })
                                }
                            </div>        
                        </div>

                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 ">
                            <div className="w-100 d-flex justify-content-between py-2 ">
                                <div>
                                    <p>Showing <b>12</b> results from total <b>127</b> for "Jackets & Coats"</p>
                                </div>
                                <div>
                                    <span className="text-muted me-3">Sort By</span>
                                    <span className="fw-bold">Popularity <FontAwesomeIcon icon={faChevronDown} /></span>
                                </div>
                            </div>

                            <div className="row w-100 m-0">
                                {
                                    products.map((product: Product) =>{
                                        return (
                                            <div className="col-lg-4 col-6" key={product.id}>
                                                <div className=" p-3 ">
                                                    <Image className="featured_product_image"
                                                        src="/featured_products/2.png"  
                                                        alt=""
                                                        width={150}
                                                        height={150}
                                                    />
                                                    <div className="d-block">
                                                        <p className="text-uppercase text-muted fw-bold fs-6 m-0">{product.name}</p>
                                                        <p className="text-uppercase text-muted fw-bold">120.00</p>
                                                    </div>
                                                </div>                                    
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}