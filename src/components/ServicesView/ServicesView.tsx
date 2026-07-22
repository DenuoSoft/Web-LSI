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
			
			<ServicesBlock>
				{services.map((service) => (
					<ServicesItem key={service.id}>
						<ItemTitle>{service.title}</ItemTitle>
				
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
