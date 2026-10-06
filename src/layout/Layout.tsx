import {Outlet, ScrollRestoration, useMatches} from 'react-router-dom';
import {BackgroundLayer, LayoutBlock, Main} from './Layout.styled';
import {Header} from '../components/Header/Header';
import {GlobalStyle} from '../styles/GlobalStyle';
import { Footer } from '../components/Footer/Footer';
import { themes, type ThemeName } from "../styles/themes";

type RouteHandle = { theme?: ThemeName };

export const Layout = () => {
	const matches = useMatches();
	const themeName =
		[...matches]
			.reverse()
			.map((m) => (m.handle as RouteHandle | undefined)?.theme)
			.find(Boolean) ?? "default";
	return (
		<>
			<GlobalStyle $theme={themes[themeName]}/>
			<BackgroundLayer />
			<LayoutBlock>
				<Header />
				<Main>
					<ScrollRestoration />
					<Outlet />
				</Main>
				<Footer />
			</LayoutBlock>
		</>
	);
};
