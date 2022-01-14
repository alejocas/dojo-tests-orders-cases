
import { calculateDiscountTwoProductsWithPurchasesgreaterThan100k } from '../../src/BusinessLogic/discounts';
import { generateInvoiceFromOrder } from '../../src/BusinessLogic/invoice-process';
import { orderMockOneProduct, 
        orderMockTwoProductsGreaterThan100k, 
        orderMockTwoProductsGreaterThan100kDiffSort,
        orderMockTwoProductsLessOrEqualThan100k,
        orderMockOneProductPurchased10Times
     } from '../mocks/order.mock';

import { expect } from 'chai';

// ESTE ES SOLO UN EJEMPLO YA QUE ME FALTAN PONER MÁS CASOS POSIBLES, POR EJEMPLO, ENVIAR VARIOS PRODUCTOS QUE SUPEREN EN TOTAL LOS 100000
describe('Discount cheapest product', () => { // the tests container
    it('Just one product and purchase is greater than 100000', () => { // the single test
        let actualResult: number = calculateDiscountTwoProductsWithPurchasesgreaterThan100k(orderMockOneProduct);
        expect(actualResult).to.equal(60000);
    });
    
    it('Two products and purchase is greater than 100000, products sorted descending by price', () => { // the single test
        let actualResult: number = calculateDiscountTwoProductsWithPurchasesgreaterThan100k(orderMockTwoProductsGreaterThan100k);
        expect(actualResult).to.equal(14070);
    });

    it('Two products and purchase is greater than 100000, products sorted ascending by price', () => { // the single test
        let actualResult: number = calculateDiscountTwoProductsWithPurchasesgreaterThan100k(orderMockTwoProductsGreaterThan100kDiffSort);
        expect(actualResult).to.equal(14070);
    });

    it('Two products and purchase is less or equal than 100000', () => { // the single test
        let actualResult: number = calculateDiscountTwoProductsWithPurchasesgreaterThan100k(orderMockTwoProductsLessOrEqualThan100k);
        expect(actualResult).to.equal(19000);
    });

});

describe('Anti-hoarders purchases tests', () => {
    it('Not allow to purchase 10 equal products in a single transaction', () => {
        const invoiceProcessStatus = generateInvoiceFromOrder(orderMockOneProductPurchased10Times);
        expect(invoiceProcessStatus).to.equal(false);
    });
});