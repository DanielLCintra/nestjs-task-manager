import { InvoiceService } from './../invoice/invoice.service';
import { CustomerService } from './customer.service';
import { UserModel } from '../models/user.model';
export declare class CustomerResolver {
    private customerService;
    private invoiceService;
    constructor(customerService: CustomerService, invoiceService: InvoiceService);
    customer(id: string): Promise<UserModel>;
    invoices(customer: any): Promise<any>;
    customers(): Promise<UserModel[]>;
}
