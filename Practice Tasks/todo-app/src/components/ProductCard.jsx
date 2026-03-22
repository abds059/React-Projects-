function ProductCard({ title, price, image }) {

    const handleAddToCart = () => {
        console.log({ title, price, image });
    };

    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
            <img src={image} alt={title} width="100%" />
            <h3>{title}</h3>
            <p>${price}</p>

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;

// function ProductCard ( {title, price, image}) {
//     return (
//         <>
//         <div style={{backgroundColor: "lightgray", padding: "20px", border: "2px solid black", borderRadius: "12px"}}>
//             <h3>{title}</h3>
//             <img src={image} alt="image" />
//             <p>Price: {price}</p>
//         </div>
//         <br />
//         <br />
//         </>
//     )
// }

// export default ProductCard;