import Strings from './Strings';
import MyPage from './MyPage';
import YourPage from './YourPage';
import Home from './Home';
import OurPage from './OurPage';
import { Switch, Route } from "react-router-dom";

function Content() {
    return(
        <>
        <h3>{Strings.Content}</h3>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/MyPage" component={MyPage}></Route>
        <Route exact path="/YourPage" component={YourPage}></Route>
        <Route exact path="/OurPage" component={OurPage}></Route>
      </Switch>
        </>
    )
}

export default Content;