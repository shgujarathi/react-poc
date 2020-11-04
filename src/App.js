import {Link} from 'react-router-dom';
import './App.css'


const App = () => {
    return (
        <div>
            <ul >
                <li><Link to="/game">Basic React Game</Link></li>
                <li><Link to="/time">Set Interval Demo</Link></li>
                <li><Link to="/aggrid">Ag Grid</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default App;
