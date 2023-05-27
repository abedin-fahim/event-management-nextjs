import MeetupDetails from '@/components/meetups/MeetupDetails';

const MeetupDetailsPage = ({ title, image, address, description }) => {
  return (
    <MeetupDetails
      title={title}
      image={image}
      address={address}
      description={description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    // fallback: false means we defined all the paths (all the possible meetupId) in the paths array
    // true means otherwise and will try to create a fallback page
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      id: meetupId,
      image:
        'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'A new meetup',
      address: 'Some address at 124 street, city, country',
      description: 'The quick brown fox jumps over the lazy dog',
    },
  };
};

export default MeetupDetailsPage;
