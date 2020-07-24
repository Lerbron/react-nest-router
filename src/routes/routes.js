import Home from 'containers/Home'
import About from 'containers/About'
import Me from 'containers/About/components/Me'
import Company from 'containers/About/components/Company'
import NotFound from 'containers/NotFound'


const routes = [
	{
		path: '/',
		component: Home,
		exact: true
  },{
		path: '/about',
		component: About,
		routes: [
			{
				path: '/about/me',
				component: Me
			}, {
				path: '/about/company',
				component: Company
			}
		]
	},{
		path: '*',
		component: NotFound
	}
]

export default routes