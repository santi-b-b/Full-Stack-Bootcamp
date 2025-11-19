'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

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
      router.push('/');
    } else {
      const data = await res.json();
      setError(data.error || 'Error al iniciar sesión');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm flex-col gap-4 p-4">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded border p-2"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="rounded border p-2"
      />
      <button type="submit" className="rounded bg-blue-500 py-2 text-white">
        Iniciar sesión
      </button>
    </form>
  );
}
