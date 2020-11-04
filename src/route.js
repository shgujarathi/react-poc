import Game from "./TicTacComponent/Game";
import TimeTick from "./TimeComponent/TimeTick";
import AgGrid from "./AgGridComponent/AgGrid";
import {Route, Switch} from 'react-router-dom';
import WelcomeDailog from "./Containment/WelcomeDailog";

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/game" component={Game}/>
                <Route exact path="/time" component={TimeTick}/>
                <Route exact path="/aggrid" component={AgGrid}/>
                <Route exact path="/containment" component={WelcomeDailog}/>
            </Switch>
        </div>
    );
};
