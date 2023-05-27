import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from '@/components/meetups/MeetupDetails';

const MeetupDetailsPage = (props) => {
  console.log(props);
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://joynal:Spring4994@joynal.iecwvq4.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    // fallback: false means we defined all the paths (all the possible meetupId) in the paths array
    // true means otherwise and will try to create a fallback page
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://joynal:Spring4994@joynal.iecwvq4.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const selectedMeetup = await meetupCollections.findOne({
    _id: new ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetailsPage;
