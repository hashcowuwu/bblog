import { useRouter } from 'next/router';

const UserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>User ID: {id}</div>;
};

export default UserPage;
