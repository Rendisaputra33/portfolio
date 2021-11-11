import React from 'react';
import { BrowserRouter as Routing, Route, Routes } from 'react-router-dom';
import Header from '../pages/components/Header';
import Loader from '../pages/components/Loader';

const Index = React.lazy(() =>
	new Promise((r, t) => setTimeout(r, 650)).then(res => import('../pages/About'))
);

const Article = React.lazy(() =>
	new Promise((r, t) => setTimeout(r, 650)).then(res => import('../pages/Article'))
);

const Repository = React.lazy(() =>
	new Promise((r, t) => setTimeout(r, 650)).then(res => import('../pages/OpenSrc'))
);

export default function Router() {
	return (
		<Routing>
			<React.Suspense fallback={<Loader loading={true} />}>
				<Header />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/articles" element={<Article />} />
					<Route path="/repository" element={<Repository />} />
				</Routes>
			</React.Suspense>
		</Routing>
	);
}
