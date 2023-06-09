import GridBox from '@/components/GridBox';
import CommunityForm from '@/components/community/CommunityForm';
import SideBar from '@/components/community/SideBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const EditCommunity = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: 'smooth',
    });
  }, [router]);
  return (
    <GridBox>
      <SideBar />
      <CommunityForm />
    </GridBox>
  );
};

export default EditCommunity;
