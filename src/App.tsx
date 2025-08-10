import { Authenticated, Unauthenticated, AuthLoading, useCurrentUser } from './lib/auth'
import { UsernameOrEmailForm, SignOutButton } from './lib/auth'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">ClubKit</h1>
        
        <AuthLoading>
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        </AuthLoading>
        
        <Unauthenticated>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h2 className="mb-6 text-center text-2xl font-medium text-gray-900">
              Sign in to your account
            </h2>
            <UsernameOrEmailForm />
          </div>
        </Unauthenticated>
        
        <Authenticated>
          <AuthenticatedContent />
        </Authenticated>
      </div>
    </div>
  )
}

function AuthenticatedContent() {
  const user = useCurrentUser()
  
  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div className="text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">
          Welcome to ClubKit!
        </h2>
        <p className="text-gray-600 mb-6">
          Hello, {user?.email || 'User'}! You're now signed in.
        </p>
        <p className="text-gray-500 mb-8">
          Your club management platform awaits.
        </p>
        <SignOutButton />
      </div>
    </div>
  )
}

export default App
