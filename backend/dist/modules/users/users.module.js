"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const update_user_input_1 = require("./dto/update-user.input");
const create_user_input_1 = require("./dto/create-user.input");
const user_dto_1 = require("./dto/user.dto");
const query_graphql_1 = require("@nestjs-query/query-graphql");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([user_entity_1.User])],
                resolvers: [
                    {
                        DTOClass: user_dto_1.UserDTO,
                        EntityClass: user_entity_1.User,
                        CreateDTOClass: create_user_input_1.CreateUserInput,
                        UpdateDTOClass: update_user_input_1.UpdateUserInput,
                        enableTotalCount: true,
                        pagingStrategy: query_graphql_1.PagingStrategies.OFFSET,
                    },
                ],
            }),
        ],
        providers: [],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map