import DataCard from "../DataCard/DataCard";
import style from './DataList.module.scss'

export default function ProductList({data}) {
  return (
		<div className={style.productListContainer}>
      {data.map(p=><DataCard key={p.id} data={p}/>)}
		</div>
  );
}
