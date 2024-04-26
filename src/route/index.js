import Home from '../Page/homePage/Home';
import Login from '../Page/login/Login';
const publicRoute = [
	{ path: '/', page: Home },
	{ path: '/login', page: Login }
];

const privateRoute = [];

export { publicRoute, privateRoute };
