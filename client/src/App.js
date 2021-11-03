import { Switch, Route, Redirect } from 'react-router-dom'
import Login_controller from '../src/components/login/login-controller'
import Registration from '../src/components/registration'
import ListItem_controller from '../src/components/listItem/listitem-controller'
import ListProperty_controller from '../src/components/listProperty/listproperty-controller'
import ItemCard_controller from '../src/components/itemCard/itemcard-controller'
import AddItem from '../src/components/addItem'
import AddProperty_controller from '../src/components/addProperty/addproperty-controller'
import { Link } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/reg"><button>Registration</button></Link>
      <Link to="/listitem"><button>List Item</button></Link>
      <Link to="/listprop"><button>List Prop</button></Link>
      <Link to="/itemcard/"><button>Item Card</button></Link>
      <Link to="/additem"><button>Add Item</button></Link>
      <Link to="/addprop"><button>Add Prop</button></Link>
      <Switch>
        <Route path="/" component={Login_controller} exact />
        <Route path="/reg" component={Registration} />
        <Route path="/listitem" component={ListItem_controller} />
        <Route path="/listprop" component={ListProperty_controller} />
        <Route path="/itemcard/:id?" component={ItemCard_controller} />
        <Route path="/additem" component={AddItem} />
        <Route path="/addprop" component={AddProperty_controller} />
      </Switch>
    </div>
  );
}

export default App;
