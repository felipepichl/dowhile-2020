import { Field, ObjectType } from "type-graphql";
import Category from "../category/Category";

@ObjectType()
class Video {
  
  @Field()
  description: string;
  
  @Field()
  name: string;

  @Field(type => Category)
  category: Category;

  @Field()
  _id: string;

}

export default Video;
