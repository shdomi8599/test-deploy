import GridBox from '@/components/GridBox';
import Content from '@/components/community/Content';
import SideBar from '@/components/community/SideBar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Community = () => {
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
      <Content />
    </GridBox>
  );
};

export default Community;
