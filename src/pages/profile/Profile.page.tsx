import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Card } from '@/components';
import { useInput } from '@/hooks';
import { useUserStore } from '@/stores';

import ProfileItem from './components/ProfileItem.component';
import useGetOtherUserProfileQuery from './custom-hook/react-query/useGetOtherUserProfileQuery';
import styles from './Profile.module.scss';

function ProfilePage() {
  const location = useLocation();
  const [userIdentifier, setUserIdentifier] = useState<string>();
  const authUserId = useUserStore((state) => state.id);
  const { data: profile } = useGetOtherUserProfileQuery({ uid: userIdentifier ?? '' }, { enabled: !!userIdentifier });

  const [email, setEmail] = useInput<string>('');
  const [blog, setBlog] = useInput<string>('');
  const [github, setGithub] = useInput<string>('');

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname) {
      setUserIdentifier(location.pathname.split('/').pop() ?? '');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (profile) {
      setEmail(profile.email);
      setBlog(profile.blog);
      setGithub(profile.github);
    }
  }, [profile, setBlog, setEmail, setGithub]);

  const isEditRight = useMemo(() => {
    return userIdentifier === authUserId;
  }, [authUserId, userIdentifier]);

  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.header}>
          <div className={styles.title}>{profile?.nickname}</div>
          {isEditRight && (
            <Button
              style={{ padding: '0.5rem 1rem' }}
              onClick={() => {
                setIsEditMode((prev) => !prev);
              }}
            >
              프로필 {isEditMode ? '저장' : '편집'}
            </Button>
          )}
        </div>
      </Card>

      <Card>
        <div className={styles.cardContainer}>
          <ProfileItem
            isEditAble={isEditMode}
            name={'이메일'}
            item={email}
            setItem={(data) => {
              setEmail(data);
            }}
          >
            <div>{email}</div>
          </ProfileItem>
          <ProfileItem
            isEditAble={isEditMode}
            name={'깃허브'}
            item={github}
            setItem={(data) => {
              setGithub(data);
            }}
          >
            <a href={github}>{github}</a>
          </ProfileItem>
          <ProfileItem
            isEditAble={isEditMode}
            name={'블로그'}
            item={blog}
            setItem={(data) => {
              setBlog(data);
            }}
          >
            <a href={blog}>{blog}</a>
          </ProfileItem>
        </div>
      </Card>
    </div>
  );
}

export default ProfilePage;
