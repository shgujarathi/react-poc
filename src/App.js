import {Link} from 'react-router-dom';
import Game from "./TicTacComponent/Game";
import TimeTick from "./TimeComponent/TimeTick";
import AgGrid from './AgGridComponent/AgGrid'


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
