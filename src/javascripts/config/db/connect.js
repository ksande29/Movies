import mongoose from 'mongoose'

//connect to database
export function connect(uri){
  if(process.env.NODE_ENV === "production") {
    uri = process.env.MONGODB_URI
  }

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
  })

  mongoose.connection.on('connected', () => {
    console.log(`Connected to ${uri}.`)
  }) 

  mongoose.connection.on('error', (err) => {
    console.log(`Connection error ${err}.`)
  }) 

  mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected from ${uri}.`)
  }) 

}