/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from 'views/Index.js';
import GrammarForm from 'views/examples/Grammar.js';
import ChatComponent from 'views/examples/Talk';
import Register from 'views/examples/Register.js';
import Login from 'views/examples/Login.js';
import Tables from 'views/examples/Tables.js';
import PronunciationApp from 'views/examples/Pronounce';

var routes = [
  {
    path: '/index',
    name: '',
    icon: '',
    component: <Index />,
    layout: '/user',
  },
  {
    path: '/pronounce',
    name: 'Pronounce Checking',
    icon: 'ni ni-planet text-blue',
    component: <PronunciationApp />,
    layout: '/user',
  },
  {
    path: '/talking',
    name: 'Talking With AI',
    icon: 'ni ni-pin-3 text-orange',
    component: <ChatComponent />,
    layout: '/user',
  },
  {
    path: '/grammar',
    name: 'Grammar Checking',
    icon: 'ni ni-single-02 text-yellow',
    component: <GrammarForm />,
    layout: '/user',
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: <Login />,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;