import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {services} from '../ServiceView/services-data';
import image from '../../assets/img/regulatory.jpg';
import {
	CapaBack,
	CapaBackBlock,
	CapaContentBlock,
	CapaImage,
	CapaInfo,
	CapaKeyBlock,
	CapaList,
	CapaPage,
	CapaSections,
	CapaServiceBlock,
	CapaText,
	CapaTextBlock,
	CapaTitle,
	CapaTitleBlock,
} from './CapaView.styled';
import LeftMenu, {type MenuLink} from '../../shared/Nav/LeftMenu';
import {useScrollSpy} from '../../hooks/useScrollSpy';
import {ItemIcon} from '../../styles/shared';
import {ArrowLeft} from '../../shared/arrow-left';

const menuLinks: MenuLink[] = [
	{id: 'about', label: 'About'},
	{id: 'key-facts', label: 'Key facts and recognition'},
	{id: 'services', label: 'Services'},
];

export const CapaView = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(id);
	}, []);

	const selected = (location.state as {service?: string} | null)?.service;
	const service =
		services.find((item) => item.title === selected) ?? services[0];

	const {activeId, handleClick} = useScrollSpy(menuLinks, {
		resetKey: service.id,
	});

	return (
		<CapaPage $visible={visible}>
			<CapaInfo>
				<CapaTitleBlock>
					<CapaBackBlock onClick={() => navigate(-1)}>
						<ItemIcon>
							<ArrowLeft />
						</ItemIcon>
						<CapaBack>
							Back to capabilities
						</CapaBack>
					</CapaBackBlock>

					<CapaTitle>
						<span>Our</span> {service.title}
					</CapaTitle>
				</CapaTitleBlock>

				<CapaContentBlock>
					<LeftMenu
						links={menuLinks}
						activeId={activeId}
						onItemClick={handleClick}
					/>

					<CapaSections>
						<CapaTextBlock id="about">
							<CapaText>{service.text}</CapaText>
							{service.description && (
								<CapaText>{service.description}</CapaText>
							)}
						</CapaTextBlock>

						<CapaKeyBlock id="key-facts">Key title</CapaKeyBlock>
						<CapaServiceBlock id="services">
							<CapaTitle>Services</CapaTitle>
							<CapaList>
								{service.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</CapaList>
						</CapaServiceBlock>
					</CapaSections>
				</CapaContentBlock>
			</CapaInfo>
			<CapaImage>
				<img src={image} />
			</CapaImage>
		</CapaPage>
	);
};
