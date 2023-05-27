import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetails from '@/components/meetups/MeetupDetails';
import { Fragment } from 'react';
import Head from 'next/head';

const MeetupDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta description={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
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
    fallback: 'blocking',
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
