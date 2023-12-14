import Link from "next/link";

export default function Home(){
    const productId = 100;
    return (
        <>
            <h1>Welcome Home!</h1>
            <Link href="/blog" >Blog</Link>    
            <Link href={`/products/${productId}`} >Product {productId}</Link>
            <Link href="/products/3" replace >Product 3</Link>
        </>
    );
}