import { Order } from "../Interfaces/Order";

export function generateInvoiceFromOrder(order: Order) {
    const productsPrice = order.products.map(product => product.quantity > 10 ? -1 : product.quantity * product.unitPrice);
    if (productsPrice.indexOf(-1) > -1) {
        return false
    } else {
        return true
    }
}