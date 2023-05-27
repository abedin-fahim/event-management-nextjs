import { MongoClient } from 'mongodb';

import MeetupList from '@/components/meetups/MeetupList';
import { Fragment } from 'react';
import Head from 'next/head';

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta description='The quick brown fox jumps over the lazy dog' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// Which is better to use? getServerSideProps vs getStaticProps
// If we don't have a page that changes on every request, or doesn't need access to the request params, It's
// better to use getStaticProps, It's also faster. Otherwise in the case of authentication token and etc getServerSideProps is to be used

// This is also a reserved name.
// export const getServerSideProps = async (context) => {
//   // This function always runs after deployment on the server
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// This is a reserve function name and it's a async function. Meaning It waits for the promise to resolve before
// rendering the component
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://joynal:Spring4994@joynal.iecwvq4.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const meetups = await meetupCollections.find().toArray();

  client.close();
  // We can run server side code from inside this function. Bc this function will never end up in the client side
  // We can access file system here or connecting to databases from here
  return {
    // This has to be named props and this is the props that we receive in the component function
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.title,
        id: meetup._id.toString(),
      })),
    },
    // revalidate takes in a number until next js revalidate after that many seconds for that incoming request after deployment
    revalidate: 1,
  };
};

export default HomePage;
