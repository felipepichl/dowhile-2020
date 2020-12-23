import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

import Video from "./Video";
import VideoSchema from '../../models/VideoSchema';

@InputType()
class VideoInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

@Resolver(Video)
class VideoResolver {

  @Query(() => [Video])
  async videos() {
    const videos = await VideoSchema.find().populate('category');
    
    return videos;
  }

  @Mutation(() => Video)
  async createVideo(@Arg('videoInput') videoInput: VideoInput){
    const video = await VideoSchema.create(videoInput);
    return video;
  } 
}

export default VideoResolver;