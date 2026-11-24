import { useEffect, useState } from "react";
import { getAllProduct } from "../Services/ProductServices";
import ProductCard from "../Component/ProductCard";
import Loader from "../Component/Loader";

const ProductPage = () => {
    const [products,setProducts] = useState([]);
    const [Loading,setLoading] = useState(true);
    const [Error,setError] = useState(null);
    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                setError(null);
                const data = await getAllProduct();
                setProducts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);
    return (
    <div className="container">
      <h2 className="mb-4">Available Products</h2>

      {/* Loading State */}
      {Loading && <Loader />}

      {/* Error State */}
      {Error && (
        <div className="alert alert-danger" role="alert">
          <strong>Error:</strong> {Error}
        </div>
      )}

      {/* Product Grid using .map() */}
      {!Loading && !Error && (
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;