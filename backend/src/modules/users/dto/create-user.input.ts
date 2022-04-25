import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;
  @Field()
  phone: string;
  @Field()
  email: string;
}
