'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/userContext';

export default function LoginForm({ onClose, onRegisterClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { setAuthless, fetchUser } = useUser();

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      // Login correcto → redirigir al home
      console.log('✅ Login exitoso');
      await setAuthless(false);
      await fetchUser();
      router.push('/');
    } else {
      try {
        const data = await res.json();
        console.log('❌ ERROR RESPONSE:', data);
        setError(data.error || 'Login failed');
      } catch (err) {
        console.log('❌ ERROR PARSING RESPONSE:', err);
        setError('Login failed');
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-96 flex-col gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      <img src={'/assets/X logo big.png'} className="mx-auto max-w-16" />
      <p className="mx-auto mb-4 text-3xl font-bold">Sign in to X</p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="h-10 w-full rounded bg-neutral-50 p-2"
      />
      <button
        type="submit"
        className="w-full rounded-full border-1 border-blue-400 bg-[var(--color-basic)] py-2 text-white hover:bg-[var(--color-basic-hover)]"
      >
        Sign In
      </button>

      <div className="mt-4 flex gap-1 text-[15px] font-light text-neutral-500">
        <p>Don't have an account? </p>
        <p
          onClick={onRegisterClick}
          className="hover:cursor-pointer hover:text-[var(--color-basic)] hover:underline"
        >
          Sign up
        </p>
      </div>
    </form>
  );
}
