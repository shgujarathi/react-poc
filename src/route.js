import Game from "./TicTacComponent/Game";
import TimeTick from "./TimeComponent/TimeTick";
import AgGrid from "./AgGridComponent/AgGrid";
import {Route, Switch, Redirect, Link} from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/game" component={Game}/>
                <Route exact path="/time" component={TimeTick}/>
                <Route exact path="/aggrid" component={AgGrid}/>
            </Switch>
        </div>
    );
};
