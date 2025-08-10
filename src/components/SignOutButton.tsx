import React from 'react';
import { useAuthActions } from '../lib/auth';

export function SignOutButton() {
  const { signOut } = useAuthActions();

  return (
    <button
      onClick={() => signOut()}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Sign Out
    </button>
  );
}
