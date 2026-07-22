import {Outlet} from 'react-router-dom';
import {BackgroundLayer, LayoutBlock, Main} from './Layout.styled';
import {Header} from '../components/Header/Header';
import {GlobalStyle} from '../styles/GlobalStyle';
import { Footer } from '../components/Footer/Footer';

export const Layout = () => {
	return (
		<>
			<GlobalStyle />
			<BackgroundLayer />
			<LayoutBlock>
				<Header />
				<Main>
					<Outlet />
				</Main>
				<Footer />
			</LayoutBlock>
		</>
	);
};
