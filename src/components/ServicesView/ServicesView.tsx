import {useNavigate} from 'react-router-dom';
import {ArrowRight} from '../../assets/img/arrow-right';
import {services} from './services-data';

import {
	ServicesBlock,
	ItemTitle,
	ItemText,
	ServicesItem,
	ItemNav,
} from './ServicesView.styled';
import {ItemIcon} from '../../styles/shared';

export const ServicesView = () => {
	const navigate = useNavigate();

	const handlePersonClick = (serviceId: number) => {
		navigate(`/service/${serviceId}`);
	};
	return (
		<>
			<h1>
				Discover our core legal services, backed by experience and a commitment
				to justice.
			</h1>
			<ServicesBlock>
				{services.map((service) => (
					<ServicesItem key={service.id}>
						<ItemTitle>{service.title}</ItemTitle>
						<ItemText>{service.text}</ItemText>
						<ItemNav onClick={() => handlePersonClick(service.id)}>
							<ItemText>See more</ItemText>
							<ItemIcon>
								<ArrowRight />
							</ItemIcon>
						</ItemNav>
					</ServicesItem>
				))}
			</ServicesBlock>
		</>
	);
};
