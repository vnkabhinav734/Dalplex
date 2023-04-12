/*Author: Sumit Kumar B00904097*/
export interface BillingAddress {
    apt: string;
    city: string;
    name: string;
    postal: string;
    province: string;
    street: string;
}

export interface Items {
    _id: string;
    program: string;
    price: string;
    interval: string;
    court_img: string;
    court_id: string;
    bookingstatus: string;
    bookingdate: string;
}

export interface InvoiceDetail {
    billingAddress: BillingAddress;
    card: string;
    createdat: string;
    date: string;
    discount: number;
    items: Items[];
    owing: string;
    paid: string;
    subTotal: string;
    tax: string;
    total: string;
    userid: string;
    _id: string;
}
