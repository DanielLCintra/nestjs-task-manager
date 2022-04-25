import { CreateUserInput } from './create-user.input';
import { InputType, ID, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
