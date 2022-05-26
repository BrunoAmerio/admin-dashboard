import { useRouter } from 'next/router'

const ProductInfo = (product) => {
    // const id= useRouter().query.id;

	return (
		<main>
            <p>{product.title}</p>
            <p>{product.description}</p>
		</main>
	);
};

export default ProductInfo;
