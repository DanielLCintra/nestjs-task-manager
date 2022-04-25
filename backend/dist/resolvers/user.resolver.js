"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResolver = void 0;
const invoice_model_1 = require("./../invoice/invoice.model");
const invoice_service_1 = require("./../invoice/invoice.service");
const customer_service_1 = require("./customer.service");
const user_model_1 = require("../models/user.model");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
let CustomerResolver = class CustomerResolver {
    constructor(customerService, invoiceService) {
        this.customerService = customerService;
        this.invoiceService = invoiceService;
    }
    async customer(id) {
        return await this.customerService.findOne(id);
    }
    async invoices(customer) {
        const { id } = customer;
        console.log(customer);
        return this.invoiceService.findByCustomer(id);
    }
    async customers() {
        return await this.customerService.findAll();
    }
};
__decorate([
    (0, graphql_1.Query)(returns => user_model_1.UserModel),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "customer", null);
__decorate([
    (0, graphql_1.ResolveField)(returns => [invoice_model_1.InvoiceModel]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "invoices", null);
__decorate([
    (0, graphql_1.Query)(returns => [user_model_1.UserModel]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "customers", null);
CustomerResolver = __decorate([
    (0, graphql_1.Resolver)(of => user_model_1.UserModel),
    __param(0, (0, common_1.Inject)(customer_service_1.CustomerService)),
    __param(1, (0, common_1.Inject)(invoice_service_1.InvoiceService)),
    __metadata("design:paramtypes", [typeof (_a = typeof customer_service_1.CustomerService !== "undefined" && customer_service_1.CustomerService) === "function" ? _a : Object, typeof (_b = typeof invoice_service_1.InvoiceService !== "undefined" && invoice_service_1.InvoiceService) === "function" ? _b : Object])
], CustomerResolver);
exports.CustomerResolver = CustomerResolver;
//# sourceMappingURL=user.resolver.js.map