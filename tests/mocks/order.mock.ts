import { Order } from "../../src/Interfaces/Order";

const orderMockOneProduct: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 60000,
        quantity: 2
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }

const orderMockTwoProductsGreaterThan100k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 2
    },
    {
        productId: 1,
        categoryId: 6,
        unitPrice: 20100,
        quantity: 1
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }

 

 const orderMockTwoProductsGreaterThan100kDiffSort: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 20100,
        quantity: 1
    },{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 2
    }
    
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }

 const orderMockTwoProductsLessOrEqualThan100k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 2
    },
    {
        productId: 1,
        categoryId: 6,
        unitPrice: 19000,
        quantity: 1
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }


const orderMockOneProductPurchased10Times: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 2
    },
    {
        productId: 1,
        categoryId: 6,
        unitPrice: 19000,
        quantity: 11
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
}
 

export {
    orderMockOneProduct,
    orderMockTwoProductsGreaterThan100k,
    orderMockTwoProductsGreaterThan100kDiffSort,
    orderMockTwoProductsLessOrEqualThan100k,
    orderMockOneProductPurchased10Times
}