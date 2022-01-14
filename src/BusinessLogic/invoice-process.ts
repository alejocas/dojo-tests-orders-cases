import { Order } from "../Interfaces/Order";

export function generateInvoiceFromOrder(order: Order) {
    const productsPrice = order.products.map(product => product.quantity > 10 ? -1 : product.quantity * product.unitPrice);
    return !productsPrice.some(price => price == -1)
}