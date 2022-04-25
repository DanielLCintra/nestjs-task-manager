import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('User')
export class UserDTO {
  @Field()
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  phone: string;

  @FilterableField()
  email: string;
}
