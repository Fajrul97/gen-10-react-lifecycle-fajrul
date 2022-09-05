import { useEffect, useState } from 'react'

let productFromAPI = [
    {
        name: 'Gelas',
        price: 3000
    },
    {
        name: 'Piring',
        price: 5000
    },
    {
        name: 'Sendok',
        price: 1000
    },
]

export default function LifeCycleFunction() {
    let [products, setProducts] = useState([])
    let [carts, setCarts] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)

    function addToCart(productWillBeAdded) {
        let cartListNow = [...carts]
        cartListNow.push(productWillBeAdded)
        setCarts(cartListNow)
    }

    function deleteFromCart(productWillBeDeleted) {
        let cartListNow = [...carts]
        cartListNow.splice(productWillBeDeleted, 1)
        setCarts(cartListNow)
    }

    useEffect(() => {
        setProducts(productFromAPI)
    }, [])

    useEffect(() => {
        let countTotalPrice = 0

        for (let cart of carts) {
            countTotalPrice = countTotalPrice + cart.price
        }

        setTotalPrice(countTotalPrice)
    }, [carts])

    return <>
        <p>Total Price: {totalPrice}</p>

        {/* ========= Ini Produk ========= */}
        <p>List Products</p>

        <ul>
            {products.map((product) =>
                <li>
                    {product.name} | Rp. {product.price} |

                    <button onClick={() => addToCart(product)}>
                        + Cart

                    </button>
                </li>
            )}
        </ul>

        {/* ========== Ini Keranjang ========== */}
        <p>Your Cart</p>

        <ul>
            {carts.map((cart, index) =>
                <li>
                    {cart.name} | Rp. {cart.price} |

                    <button onClick={() => deleteFromCart(index)}>
                        - Delete

                    </button>
                </li>
            )}
        </ul>

    </>

}