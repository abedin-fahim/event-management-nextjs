import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);
    // Makes sure that you cannot go back with the back button
    // router.replace()
    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Add your own meetups</title>
        <meta description='The quick brown fox jumps over the lazy dog' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetupPage;
