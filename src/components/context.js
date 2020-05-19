import React, { PureComponent } from 'react'
import {partnersItem} from './data'

const ProductContext = React.createContext();
// Provider
// Consumer
    

 class ProductProvider extends PureComponent {
     state = {
         partnersItem : partnersItem
     }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}

