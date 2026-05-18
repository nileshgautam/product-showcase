import './ProductCard.css'
import Card from '../Card/Card';


function ProductCard({ id, name, description, price, image, isOnSale = false, saleprice = price }) {
    return (
        <Card className="product-card" id={id}>
            <img
                src={image}
                alt={name} />
            <div className="product-info">
                <h3>{name}

                    {isOnSale && <span className="sale-badge"> SALE</span>}

                </h3>
                <p>{description}</p>
                <div className="price-container">
                    <span className='price'>

                        {isOnSale ? (
                            <>
                                <span className='original-price'> ${price}</span>
                                <span className='sale-price'> ${saleprice}</span>
                            </>
                        ) : <span className='price'> ${price}</span>}
                    </span>
                </div>
                <button className='btn-add-to-cart' onClick={() => alert(`Added ${name} to the card!`)}>Add to Cart</button>
            </div>
        </Card>
    )
}


export default ProductCard;