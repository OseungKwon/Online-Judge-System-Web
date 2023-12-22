import React, { useCallback, useState } from 'react';

import { Button, Input } from '../../components';
import { useInput } from '../../hooks';
import useSignInMutation from './custom-hook/useSignInMutation.ts';
import useSignUpMutation from './custom-hook/useSignUpMutation.ts';
import styles from './Login.module.scss';

function LoginPage() {
  const [nickname, setNickname, isNicknameValid] = useInput<string>('');
  const [password, setPassword, isPasswordValid] = useInput<string>('');
  const [email, setEmail, isEmailValid] = useInput<string>('', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const [isSignUp, setIsSignUp] = useState(true);

  const { mutate: mutateSignUp } = useSignUpMutation({
    onSuccess(data) {
      alert(data.requestData.nickname + '님의 회원가입에 성공했습니다.');
      onInitForm();
      setIsSignUp(false);
    },
    onError() {
      alert('회원가입에 실패했습니다.');
    },
  });

  const { mutate: mutateSignIn } = useSignInMutation({
    onSuccess(data) {
      sessionStorage.setItem('accessToken', data.responseData.accessToken);
    },
    onError(error) {
      if (error.response?.status === 404) {
        alert('아이디나 비밀번호가 일치하지 않습니다');
      }
    },
  });

  const isFormValid = useCallback(
    (isSignUp: boolean) => {
      console.log(isNicknameValid, isEmailValid, isPasswordValid);
      if (isSignUp) {
        return isNicknameValid && isEmailValid && isPasswordValid;
      }
      return isEmailValid && isPasswordValid;
    },
    [isEmailValid, isNicknameValid, isPasswordValid],
  );

  const onSubmitForm = useCallback(() => {
    if (isSignUp) {
      mutateSignUp({
        email: email,
        nickname: nickname,
        password: password,
      });
      return;
    }

    mutateSignIn({
      email: email,
      password: password,
    });
  }, [email, isSignUp, mutateSignIn, mutateSignUp, nickname, password]);

  const onInitForm = useCallback(() => {
    setEmail('');
    setNickname('');
    setPassword('');
  }, [setEmail, setNickname, setPassword]);

  return (
    <div className={styles.wrapper}>
      <h1>Online Judge</h1>
      <form>
        {isSignUp && (
          <Input
            value={nickname}
            placeholder={'닉네임'}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        )}
        <Input
          type={'email'}
          value={email}
          placeholder={'이메일'}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {!isEmailValid && <div className={styles.errorMessage}>올바른 이메일 주소를 입력해 주세요.</div>}
        <Input
          type={'password'}
          value={password}
          placeholder={'비밀번호'}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();

            if (isFormValid(isSignUp)) {
              onSubmitForm();
              return;
            }
            alert('올바른 정보를 입력해 주세요.');
          }}
        >
          {isSignUp ? '회원가입' : '로그인'}
        </Button>
        <Button
          style={{ background: '#EAEDED', color: '#34495E' }}
          type={'button'}
          onClick={(e) => {
            e.preventDefault();
            setIsSignUp((prev) => !prev);
          }}
        >
          {isSignUp ? '로그인' : '회원가입'} 하러가기
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
