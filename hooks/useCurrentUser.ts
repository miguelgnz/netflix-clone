import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

interface User {
  email: string,
  name: string,
  // add other properties as needed
}

const useCurrentUser = () => {
  const { data: user, error, isValidating, mutate } = useSWR<User>('/api/current', fetcher)

  return {
    user,
    error,
    isLoading: isValidating && !user,
    mutate,
  }
}

export default useCurrentUser
