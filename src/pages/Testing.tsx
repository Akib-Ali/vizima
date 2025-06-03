import { useEffect, useState } from "react";
export const Testing = (): JSX.Element => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(() => {
        // setCount(1);
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    })
    const changeText = () => {
        setProducts("Hello World");
    }
    const changeCount = () => {
        setCount(count + 1);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Testing Page</h1>
            {products && products.length > 0 && products.map((product: any) => (
                <div key={product.id} className="bg-white p-4 rounded shadow mb-4 w-full max-w-md">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-gray-700">{product.description}</p>
                    <p className="text-lg font-bold">${product.price}</p>
                </div>
            ))}
            <h1 className="text-3xl font-bold mb-4">Count - {count}</h1>
            <p className="text-lg text-gray-700">This is a placeholder for testing purposes.</p>
            <p className="text-sm text-gray-500 mt-2">You can add your testing components here.</p>
            <button onClick={() => changeCount()}>Click Me</button>
        </div>
    );
}