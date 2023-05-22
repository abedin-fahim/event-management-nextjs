import MeetupList from '@/components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image:
      'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    address:
      'A random street, at a random district, at a random city, at a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image:
      'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    address:
      'A random street, at a random district, at a random city, at a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image:
      'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    address:
      'A random street, at a random district, at a random city, at a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
  {
    id: 'm4',
    title: 'A fourth meetup',
    image:
      'https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    address:
      'A random street, at a random district, at a random city, at a random country',
    description: 'The quick brown fox jumps over the lazy dog',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
