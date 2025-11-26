import {createBrowserRouter} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Layout} from '../layout/Layout';
import {Services} from '../pages/Services';
import {People} from '../pages/People';
import {Articles} from '../pages/Articles';
import {Alerts} from '../pages/Alerts';
import {NotFound} from '../pages/NotFound';
import {Person} from '../pages/Person';
import {Policy} from '../pages/Policy';
import {Terms} from '../pages/Terms';
import {Cookie} from '../pages/Cookie';
import {LegalNotice} from '../pages/Legal';
import {Service} from '../pages/Service';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Layout />,
			errorElement: <NotFound />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/services',
					element: <Services />,
				},
				{
					path: '/service/:id',
					element: <Service />,
				},
				{
					path: '/people',
					element: <People />,
				},
				{
					path: '/person/:id',
					element: <Person />,
				},
				{
					path: '/articles',
					element: <Articles />,
				},
				{
					path: '/alerts',
					element: <Alerts />,
				},
				{
					path: '/policy',
					element: <Policy />,
				},
				{
					path: '/terms',
					element: <Terms />,
				},
				{
					path: '/cookie',
					element: <Cookie />,
				},
				{
					path: '/legal',
					element: <LegalNotice />,
				},
			],
		},
		{
			path: '*',
			element: <NotFound />,
		},
	],
	//  {
	//	basename: '/Web-LSI',
	//}   
);
