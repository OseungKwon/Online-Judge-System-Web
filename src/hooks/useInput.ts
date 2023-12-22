import { useCallback, useState } from 'react';

function useInput<T extends string | number>(
  initValue: T,
  validator?: RegExp,
): [T, (data: T, onError?: () => void) => void, boolean] {
  const [inputData, setInputData] = useState<T>(initValue ?? '');
  const [isValid, setIsValid] = useState<boolean>(true);

  const updateData = useCallback(
    (data: T, onError?: () => void) => {
      setInputData(data);
      if (!validator || validator.test(String(data))) {
        setIsValid(true);
      } else {
        onError && onError();
        setIsValid(false);
      }
    },
    [validator],
  );

  return [inputData, updateData, isValid];
}

export default useInput;
