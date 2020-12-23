import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Category {
  
  @Field()
  description: string;
  
  @Field()
  name: string;

  @Field()
  _id: string;

}

export default Category;
