import {useCallback, useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {services} from '../ServiceView/services-data';
import image from '../../assets/img/regulatory.jpg';
import {
	CapaBack,
	CapaContentBlock,
	CapaImage,
	CapaInfo,
	CapaKeyBlock,
	CapaList,
	CapaMenu,
	CapaMenuButton,
	CapaMenuItems,
	CapaPage,
	CapaSections,
	CapaServiceBlock,
	CapaText,
	CapaTextBlock,
	CapaTitle,
	CapaTitleBlock,
} from './CapaView.styled';
//import {CapaArrow} from '../../shared/capa-arrow';

const menuLinks = [
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

	const [activeId, setActiveId] = useState(menuLinks[0].id);
	// пока идёт скролл по клику, scroll-spy не должен перебивать выбор
	const lockRef = useRef(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [service.id]);

	// определяем активный раздел при скролле
	useEffect(() => {
		const update = () => {
			if (lockRef.current) return;

			// «линия чтения» на 35% высоты окна
			const line = window.innerHeight * 0.35;
			let current = menuLinks[0].id;

			for (const {id} of menuLinks) {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= line) current = id;
			}

			// дошли до низа страницы — последний раздел может быть коротким
			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 2;
			if (atBottom) current = menuLinks[menuLinks.length - 1].id;

			setActiveId(current);
		};

		update();
		window.addEventListener('scroll', update, {passive: true});
		window.addEventListener('resize', update);
		return () => {
			window.removeEventListener('scroll', update);
			window.removeEventListener('resize', update);
		};
	}, []);

	const handleMenuClick = useCallback((id: string) => {
		const el = document.getElementById(id);
		if (!el) return;

		lockRef.current = true;
		setActiveId(id);
		el.scrollIntoView({behavior: 'smooth', block: 'start'});

		const unlock = () => {
			lockRef.current = false;
			window.dispatchEvent(new Event('scroll')); // пересчитать активный пункт
		};
		window.addEventListener('scrollend', unlock, {once: true});
		window.setTimeout(unlock, 1000); // запасной вариант для браузеров без scrollend
	}, []);

	return (
		<CapaPage $visible={visible}>
			<CapaInfo >
				<CapaTitleBlock>
					<CapaBack type="button" onClick={() => navigate(-1)}>
						{/* <CapaArrow /> */}
						Back to capabilities
					</CapaBack>
					<CapaTitle>
						<span>Our</span> {service.title}
					</CapaTitle>
				</CapaTitleBlock>

				<CapaContentBlock>
					<CapaMenu>
						{menuLinks.map((link) => (
							<CapaMenuItems key={link.id} $active={activeId === link.id}>
								<CapaMenuButton
									type="button"
									onClick={() => handleMenuClick(link.id)}
								>
									{link.label}
								</CapaMenuButton>
							</CapaMenuItems>
						))}
					</CapaMenu>

					<CapaSections>
						<CapaTextBlock id="about">
							<CapaText>{service.text}</CapaText>
							{service.description && (
								<CapaText>{service.description}</CapaText>
							)}
							<CapaList>
								{service.list.map((item) => (
									<li key={item}>{item}</li>
								))}
							</CapaList>
						</CapaTextBlock>

						<CapaKeyBlock id="key-facts">Key title</CapaKeyBlock>
						<CapaServiceBlock id="services">Service</CapaServiceBlock>
					</CapaSections>
				</CapaContentBlock>
			</CapaInfo>
			<CapaImage >
				<img src={image} />
			</CapaImage>
		</CapaPage>
	);
};
