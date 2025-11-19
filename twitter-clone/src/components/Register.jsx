'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      const user = await res.json();
      console.log('Usuario creado:', user);
      // Aquí podrías redirigir o mostrar mensaje de éxito
    } else {
      const error = await res.json();
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-80 flex-col gap-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" required />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        type="password"
        required
      />
      <button type="submit" className="rounded bg-blue-500 py-2 text-white">
        Registrarse
      </button>
    </form>
  );
}
