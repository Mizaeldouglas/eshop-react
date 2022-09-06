import "./styles.css";

export default function Product() {

	return (
		
			<div className="product">
				<div className="product__info">
					<p>Title</p>
					<p className="product__price">$30</p>
					<div className="product__rating"><p>⭐⭐</p></div>
				</div>

				<img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._$L1000_.jpg" alt="product__image" />
				<button>Add to Basket</button>
			</div>
		
	)
}