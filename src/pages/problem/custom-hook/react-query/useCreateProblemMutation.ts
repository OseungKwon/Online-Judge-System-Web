import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AxiosResponseInterface, fetchCreateProblem, ProblemCreateResponseInterface } from '@/services/apis';

export default function useCreateProblemMutation(
  options?: UseMutationOptions<AxiosResponseInterface<ProblemCreateResponseInterface, void>, AxiosError, void>,
) {
  return useMutation({
    mutationFn: async () => {
      return fetchCreateProblem();
    },
    ...options,
  });
}
