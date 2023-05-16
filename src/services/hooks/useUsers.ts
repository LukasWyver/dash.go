import { api } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function getUsers(): Promise<User[]>{
 // const response = await fetch('https://localhost:3000/api/users');
 const { data } = await api.get('/users');
 // const data = await response.json();
 const users = data.users.map((user: User) => {
   return {
     id: user.id,
     name: user.name,
     email: user.email,
     createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
       day: '2-digit',
       month: 'long',
       year: 'numeric',
     }),
   };
 });

 return users;
}

export function useUsers(){
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 5, // 5 segs
  });
}
