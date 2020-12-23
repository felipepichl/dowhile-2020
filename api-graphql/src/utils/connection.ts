import  * as mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:admin@maincluster.yniia.mongodb.net/api-graphql?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

