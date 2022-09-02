import React, {Component} from 'react'

const productsFromAPI =  [
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

export default class LatihanLifeCycle extends Component {
    
    constructor (){
        super()

        this.state = {
            products:[],
            carts:[],
            totalPrice: 0
        }
    }

    componentDidMount () {
        this.setState({ products : productsFromAPI})
    }

    addToCart (productWillBeAdded) {
        let cartListNow = [... this.state.carts]
        cartListNow.push(productWillBeAdded)
        this.setState({carts: cartListNow})
    }

    deleteFromCart(productWillBeDeleted) {
        console.log(productWillBeDeleted)
        let cartListNow = [... this.state.carts]
        cartListNow.splice(productWillBeDeleted, 1)
        this.setState({carts: cartListNow})
    }

    componentDidUpdate (prevProps, prevState) {
        console.log(prevState)
        if (prevState.carts.length !== this.state.carts.length ){
            console.log("tes")
            let totalPriceFinal = 0;

            for (const cart of this.state.carts){
                totalPriceFinal = totalPriceFinal + cart.price
            }

            this.setState({ totalPrice : totalPriceFinal})
        }
    }

    render () {
        return (
            <div>

                <p>Total Price: {this.state.totalPrice}</p>


                {/* ========= Ini Produk ========= */}
                <p>List Products</p>

                <ul>
                    {this.state.products.map((product) =>
                        <li>
                            {product.name} | Rp. {product.price} |

                            <button onClick={() => this.addToCart(product)}>
                                + Cart

                            </button>
                        </li>
                    )}
                </ul>

                {/* ========== Ini Keranjang ========== */}
                <p>Your Cart</p>

                <ul>
                    {this.state.carts.map((cart, index) =>
                    <li>
                        {cart.name} | Rp. {cart.price} |

                        <button onClick={() => this.deleteFromCart(index)}>
                                - Delete

                        </button>
                    </li>
                    )}
                </ul>

            </div>
        )
    }
}