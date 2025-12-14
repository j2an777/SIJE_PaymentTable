import { useQuery } from '@tanstack/react-query';

import type { MockResponse } from '../../types/responses';
import fetchMock from '../../apis/mockApi';

const useGetMocks = () => {
  return useQuery<MockResponse>({
    queryKey: ['mocks'],
    queryFn: fetchMock,
  });
};

export { useGetMocks };
