import Product from "../Product";
import "./styles.css";

export default function Home() {

	return (
		<div>
			<div className="home">
				<div className="home__image">
					<img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="Logo" className="home__image" />
				
				</div>
				<div className="home__row">
				<Product />
				<Product />
					
				</div>
				<div className="home__row">
				<Product />
				<Product />
				<Product />
					
				</div>
				<div className="home__row">
				<Product />
				</div>
				

			</div>
		</div>
	)

}