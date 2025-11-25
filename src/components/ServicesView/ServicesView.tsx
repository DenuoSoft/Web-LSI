import {services} from './services-data';

import {
	ServicesBlock,
	ItemTitle,
	ItemText,
	ServicesItem,
} from './ServicesView.styled';

export const ServicesView = () => {
	return (
		<>
			<h1>
				Discover our core legal services, backed by experience and a commitment
				to justice.
			</h1>
			<ServicesBlock >
			{services.map(service => (
					<ServicesItem key={service.id}>
						<ItemTitle>{service.title}</ItemTitle>
						<ItemText>
							{service.text}
						</ItemText>
					</ServicesItem>
				))}
			</ServicesBlock>
		</>
	);
};
