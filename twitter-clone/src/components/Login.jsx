'use client';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/Register';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { LuCircleOff } from 'react-icons/lu';
import Modal from './Modal';
import { useState } from 'react';

export default function Login() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div>
      <div className="mb-16 flex w-80 flex-col gap-4">
        <button className="flex h-10 w-full items-center justify-center gap-2 rounded-full border-1 border-neutral-200 py-2 font-bold hover:bg-neutral-200">
          <FcGoogle className="h-5 w-5" />
          <p className="font-bold">Sign up with Google</p>
        </button>
        <button className="flex h-10 w-full items-center justify-center gap-2 rounded-full border-1 border-neutral-200 py-2 hover:bg-neutral-200">
          <FaApple className="h-5 w-5" />
          <p>Sign up with Apple</p>
        </button>
        <button
          onClick={() => setRegisterOpen(true)}
          className="h-10 w-full items-center justify-center rounded-full border-1 bg-black py-2 hover:bg-neutral-800"
        >
          <p className="font-bold text-white">Create account</p>
        </button>
        <p className="mb-4 text-xs text-neutral-700">
          By signing up, you agree to our Terms of Service and Privacy Policy, including our Cookie
          Policy.
        </p>
        <p className="text-lg font-bold">Already have an account?</p>
        <button
          onClick={() => setLoginOpen(true)}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-full border-1 border-neutral-200 py-2 font-bold hover:bg-neutral-200"
        >
          Sign in
        </button>
        <button className="flex h-10 w-full items-center justify-center gap-2 rounded-full border-1 border-neutral-200 py-2 font-bold hover:bg-neutral-200">
          <LuCircleOff className="h-5 w-5" />
          <p>Get Grok</p>
        </button>
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
          <LoginForm
            onRegisterClick={() => {
              setLoginOpen(false);
              setRegisterOpen(true);
            }}
          />
        </Modal>
        <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
          <RegisterForm
            onLogInClick={() => {
              setLoginOpen(true);
              setRegisterOpen(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
}
