import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './header.sass';

export const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    // const searchQuery = searchParams.get('query') || '';
    const setQueryParams = () => {
        setSearchParams({ category: 'books', page: 2, random: Math.floor(Math.random() * 100) });
    }

    const getQueryParams = () => {
        console.log('Query Params:', searchParams);
    }

    // const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
    // // const [searchQuery, setSearchQuery] = useState('');

    // const handleSearch = (event) => {
    //     event.preventDefault();
    //     // Perform search logic here
    //     console.log('Searching for:', searchQuery);
    //     // Optionally, navigate to a search results page
    //     navigate(`/search?query=${searchQuery}`);
    // };

    const navigateToHome = () => {
        const params = new URLSearchParams(location.search);
        params.set('category', 'books');
        params.set('sor', 'popular');
        params.set('page', 3);
        navigate(`/?${params.toString()}`);
    }

    const goBack = () => {
        // Perform logic to go back in history
        navigate(-1);
    }
    const goForward = () => {
        // Perform logic to go forward in history
        navigate(1);
    }

    return (
        <header className="header">
            <div className="header__logo">My App</div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className={({isActive}) => isActive ? 'active' : ''}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user/1" className={({isActive}) => isActive ? 'active' : ''}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
                    </li>
                    <li>
                        <button onClick={goBack}>Назад</button>
                        <button onClick={goForward}>Вперед</button>
                        <button onClick={() => setQueryParams()}>Добавить query параметры</button>
                        <button onClick={() => getQueryParams()}>Вывести query параметры</button>
                        <button onClick={() => navigateToHome()}>Перейти на Home</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}