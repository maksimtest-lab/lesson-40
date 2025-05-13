export default function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <>{isAuthenticated ? children : <h1>Access Denied</h1>}</>
  )
}