import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  AxiosResponseInterface,
  fetchDeleteProblem,
  ProblemDeleteRequestInterface,
  ProblemDeleteResponseInterface,
} from '@/services/apis';

export default function useDeleteProblemMutation(
  options?: UseMutationOptions<
    AxiosResponseInterface<ProblemDeleteResponseInterface, ProblemDeleteRequestInterface>,
    AxiosError,
    ProblemDeleteRequestInterface
  >,
) {
  return useMutation({
    mutationFn: async (request) => {
      return fetchDeleteProblem(request);
    },
    ...options,
  });
}
