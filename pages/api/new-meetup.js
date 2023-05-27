import { MongoClient } from 'mongodb';
// api/new-meetup
// api/ POST

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://joynal:Spring4994@joynal.iecwvq4.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupCollections = db.collection('meetups');

    const result = await meetupCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup Inserted!' });
  }
};

export default handler;
