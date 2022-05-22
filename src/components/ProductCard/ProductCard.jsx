import { useState } from 'react';
import style from './ProductCard.module.scss'
export default function ProductCard({product}) {
    const [mouseEnter, setMouseEnter]= useState(false);
    return (
          <div onMouseLeave={()=>setMouseEnter(false)} onMouseEnter={()=>setMouseEnter(true)} className={style.container}>
              <p>{product.title}</p>
              {mouseEnter&&(
                <div className={style.buttonContainer}>
                    <button>Edit</button>
                    <button>Disable</button>
                    <button>Delete</button>
                </div>
              )}
          </div>
    );
  }
  