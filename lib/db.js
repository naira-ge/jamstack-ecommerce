import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}
