function Products() {
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
    ];

    return (
        <div>
            <h2>Products</h2>
            {products.map(p => (
                <div key={p.id} style={{ border: "1px solid", margin: "10px", padding: "10px" }}>
                    <h3>{p.name}</h3>
                    <p>${p.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Products;