import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({products}) {
  return (
		<div>
            {products.map((p,i)=><ProductCard key={i} product={p}/>)}
		</div>
  );
}
