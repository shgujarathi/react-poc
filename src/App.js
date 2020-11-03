import {Link} from 'react-router-dom';


const App = () => {
    return (
        <div>
            <h5>Routes - SPA</h5>
            <ul>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/time">Time</Link></li>
                <li><Link to="/aggrid">Ag Grid</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default App;
