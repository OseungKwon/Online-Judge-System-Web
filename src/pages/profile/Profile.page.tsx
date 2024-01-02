import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Card } from '@/components';
import { useInput } from '@/hooks';
import { useUserStore } from '@/stores';

import ProfileItem from './components/ProfileItem.component';
import useGetOtherUserProfileQuery from './custom-hook/react-query/useGetOtherUserProfileQuery';
import useUpdateUserProfileMutation from './custom-hook/react-query/useUpdateUserProfileMutation';
import styles from './Profile.module.scss';

function ProfilePage() {
  const location = useLocation();
  const [userIdentifier, setUserIdentifier] = useState<string>();
  const authUserId = useUserStore((state) => state.id);

  const { data: profile } = useGetOtherUserProfileQuery({ uid: userIdentifier ?? '' }, { enabled: !!userIdentifier });
  const { mutate: mutateUpdateUserProfile } = useUpdateUserProfileMutation();

  const [email, setEmail] = useInput<string>('');
  const [nickname, setNickname] = useInput<string>('');

  const [blog, setBlog] = useInput<string>('');
  const [github, setGithub] = useInput<string>('');
  const [message, setMessage] = useInput<string>('');
  const [password, setPassword] = useInput<string>('');

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
      setNickname(profile.nickname);
      setMessage(profile.message);
      setPassword('');
    }
  }, [profile, setBlog, setEmail, setGithub, setMessage, setNickname, setPassword]);

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
                if (isEditMode) {
                  mutateUpdateUserProfile({
                    github: github,
                    message: message,
                    nickname: nickname,
                    blog: blog,
                    password: password,
                  });
                }
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
            name={'닉네임'}
            item={nickname}
            setItem={(data) => {
              setNickname(data);
            }}
          >
            <div>{nickname}</div>
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
          <ProfileItem
            isEditAble={isEditMode}
            name={'소개'}
            item={message}
            setItem={(data) => {
              setMessage(data);
            }}
          >
            <span>{message}</span>
          </ProfileItem>
        </div>
      </Card>
      {isEditMode && (
        <Card>
          <div className={styles.cardContainer}>
            <ProfileItem
              isEditAble={isEditMode}
              name={'비밀번호'}
              item={password}
              setItem={(data) => {
                setPassword(data);
              }}
            >
              <span>{password}</span>
            </ProfileItem>
            <div>수정을 위해 비밀번호를 입력해 주세요.</div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default ProfilePage;
