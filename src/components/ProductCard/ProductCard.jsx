import Link from 'next/link';
import { useState } from 'react';
import style from './ProductCard.module.scss'
import Image from 'next/image'
import PropTypes from "prop-types";

export default function ProductCard({product}) {
    const [mouseEnter, setMouseEnter]= useState(false);
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
    const {id, images, title, price, stock} = product;
    return (
          <div onMouseLeave={()=>setMouseEnter(false)} onMouseEnter={()=>setMouseEnter(true)} className={style.container}>
              <div className={style.productImg}>
                <Image
                  loader={myLoader}
                  src={images[0]}
                  alt="Producto"
                  width={40}
                  height={40}
                />
              </div>
              <div className={style.title}>
                <Link href={`/products/${id}`}>
                <a>{title}</a>
                </Link>
              </div>
              <div className={style.option}>
                <p className={style.informationTitle}>Precio</p>
                <p>$ {price}</p>
              </div>
              <div className={style.option}>
                <p className={style.informationTitle}>Stock</p>
                <p>{stock}</p>
              </div> 
              {mouseEnter&&(
                <div className={style.buttonContainer}>
                    <button>Editar</button>
                    <button>Deshabilitar</button>
                    <button>Eliminar</button>
                </div>
              )}
          </div>
    );
  }
  ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
  };