import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {services} from '../ServiceView/services-data'; 
import {
	CapaBack,
	
	CapaInfo,
	CapaList,
	CapaPage,
	CapaText,
	CapaTitle,
} from './CapaView.styled';

export const CapaView = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// название услуги приходит из Tabs через state роутера
	const selected = (location.state as {service?: string} | null)?.service;

	// если страницу открыли напрямую (без state) — показываем первую услугу
	const service =
		services.find((item) => item.title === selected) ?? services[0];

	// при открытии страницы всегда начинаем сверху
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [service.id]);

	return (
		<CapaPage>
			<CapaInfo>
				<CapaBack type="button" onClick={() => navigate(-1)}>
					Back
				</CapaBack>

				<CapaTitle>{service.title}</CapaTitle>
				<CapaText>{service.text}</CapaText>

				{service.description && <CapaText>{service.description}</CapaText>}

				<CapaList>
					{service.list.map((item) => (
						<li key={item}>{item}</li>
					))}
				</CapaList>
			</CapaInfo>

			{/* <CapaImage>
				<img src={service.image} alt={service.title} />
			</CapaImage> */}
		</CapaPage>
	);
};