import type { MockResponse } from '../types/responses';

const fetchMock = async (): Promise<MockResponse> => {
  try {
    const res = await fetch('/api/mock');
    if (!res.ok) {
      throw new Error('Failed to fetch mock data');
    }
    return res.json() as Promise<MockResponse>;
  } catch (e) {
    throw e;
  }
};

export default fetchMock;
