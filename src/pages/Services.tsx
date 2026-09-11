import React from 'react';
import {Tabs} from '../components/Tabs/Tabs';
import {services} from '../components/ServiceView/services-data';
import {ServiceView} from '../components/ServiceView/ServiceView';

export const Services = () => {
	// Табы — по одному на каждый сервис
	const tabs = services.map((service) => ({name: service.title}));

	// Контент таба — ServiceView с этим сервисом (БЕЗ Tabs внутри)
	const content = services.reduce(
		(acc, service) => {
			acc[service.title] = <ServiceView service={service} />;
			return acc;
		},
		{} as Record<string, React.ReactNode>,
	);

	// Карта картинок: имя таба → картинка
	const images: Record<string, string> = services.reduce(
		(acc, service) => {
			acc[service.title] = service.image;
			return acc;
		},
		{} as Record<string, string>,
	);

	return (
		<Tabs
			tabs={tabs}
			content={content}
			images={images} // ← картинки по имени таба
			variant="services"
		/>
	);
};

export default Services;
