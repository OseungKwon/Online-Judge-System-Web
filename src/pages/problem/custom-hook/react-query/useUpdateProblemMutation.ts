import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AxiosResponseInterface,
  fetchUpdateProblem,
  ProblemResponseInterface,
  ProblemUpdateRequestInterface,
} from '@/services/apis';

export default function useUpdateProblemMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<ProblemResponseInterface, ProblemUpdateRequestInterface>,
    AxiosError,
    ProblemUpdateRequestInterface
  >,
) {
  return useMutation({
    mutationFn: async (request) => {
      return fetchUpdateProblem(request);
    },
    ...options,
  });
}
