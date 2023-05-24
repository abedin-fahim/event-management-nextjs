import MeetupDetails from '@/components/meetups/MeetupDetails';

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      title='A new meetup'
      image='https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      address='Some address at 124 street, city, country'
      description='The quick brown fox jumps over the lazy dog'
    />
  );
};

export default MeetupDetailsPage;
