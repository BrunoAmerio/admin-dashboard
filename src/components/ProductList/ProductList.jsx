import ProductCard from "../ProductCard/ProductCard";
import style from './ProductList.module.scss'

export default function ProductList({products}) {
  return (
		<div className={style.productListContainer}>
            {products.map((p,i)=><ProductCard key={i} product={p}/>)}
		</div>
  );
}
