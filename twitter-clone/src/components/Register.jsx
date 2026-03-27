'use client';

import { useState } from 'react';
import { useUser } from '@/contexts/userContext';
import { useRouter } from 'next/navigation';

export default function RegisterForm({ onLogInClick }) {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser, setAuthless, fetchUser } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, name, email, password }),
      credentials: 'include', // ✅ para que la cookie se reciba
    });

    if (res.ok) {
      const newUser = await res.json();
      setUser(newUser); // update context
      setAuthless(false); // no longer an "authless" user
      router.push('/'); // redirigir al home
    } else {
      let error;
      try {
        error = await res.json();
      } catch {
        error = { message: 'Empty response or invalid JSON' };
      }
      if (!error.message) {
        error.message = 'Unknown error or empty server response';
      }
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-96 flex-col gap-4 p-4">
      <img src={'/assets/X logo big.png'} className="mx-auto max-w-16" />
      <p className="mx-auto mb-4 text-3xl font-bold">Create your account</p>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <button
        type="submit"
        className="h-10 w-full rounded-full border-1 border-blue-400 bg-[var(--color-basic)] text-white hover:bg-[var(--color-basic-hover)]"
      >
        Sign Up
      </button>
      <div className="mt-4 flex gap-1 text-[15px] font-light text-neutral-500">
        <p>Already have an account? </p>
        <p
          onClick={onLogInClick}
          className="hover:cursor-pointer hover:text-[var(--color-basic)] hover:underline"
        >
          Sign In
        </p>
      </div>
    </form>
  );
}
