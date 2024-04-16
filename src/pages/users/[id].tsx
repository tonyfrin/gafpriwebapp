import React from 'react';
import { useRouter } from 'next/router';
import { UserDetails } from '../../Abstract/Component/UserDetails';

export default function UserById() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <UserDetails id={id} />
    </>
  );
}
