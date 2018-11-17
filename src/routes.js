
//路由页面组件
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Register from './components/Register'
import Login from './components/Login'
import About from './components/About/About'
//二级路由
import Contact from './components/About/Contact'
import Delivery from './components/About/Delivery'
import Historys from './components/About/Historys'



export const routes = [
  {path : "/" , name : 'HomeLink' , component : Home},
  {path : "/menu" , name : "MenuLink" , component : Menu},
  {path : "/admin" , name : "AdminLink" , component : Admin},
  {path : "/register" , name : "RegisterLink" , component : Register},
  {path : "/login" , name : "LoginLink",component : Login},
  {path : "/about" , name : "AboutLink",component : About,redirect : "/contact" , children : [
    {path : "/contact" , name : "ContactLink" , component : Contact},
    {path : "/delivery" , name : "DeliveryLink" , component : Delivery},
    {path : "/historys" , name : "HistorysLink" , component : Historys}
  ]},
  {path : "*" , redirect : "/"}
]