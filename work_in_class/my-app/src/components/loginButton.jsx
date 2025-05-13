import { useNavigate } from 'react-router-dom';

export default function LoginButton() {
    const navigate = useNavigate();
    const handleLogin = () => {
        localStorage.setItem('auth', true); // Store token in local storage
        // Perform login logic here
        // After successful login, navigate to the home page
        navigate('/user/12/32', {replace: true});
    };

    const handleRegister = () => {
        // Perform registration logic here
        // After successful registration, navigate to the home page
        navigate('/home', {replace: true});
    };

    const handleLogout = () => {
        localStorage.removeItem('auth'); // Remove token from local storage
        // Perform logout logic here
        // After successful logout, navigate to the login page
        navigate('/login', {replace: true});
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}