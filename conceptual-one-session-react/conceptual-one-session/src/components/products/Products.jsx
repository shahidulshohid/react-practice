
import Product from "../product/Product"
export default function Products({info}){
    
    return (
        <div>
            <h2>I am from Second</h2>
            <Product info={info}></Product>
        </div>
    )
}