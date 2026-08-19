import React from 'react';
import { Tabs } from "../components/Tabs/Tabs";
import { services } from '../components/ServicesView/services-data';
import { ServiceView } from '../components/ServiceView/ServiceView';

export const Services = () => {
  // Создаем объект content, передавая данные каждой услуги в ServiceView
  const content = services.reduce((acc, service) => {
    // Передаем service как пропс, а не полагаемся на useParams
    acc[service.title] = <ServiceView key={service.id} service={service} />;
    return acc;
  }, {} as Record<string, React.ReactNode>);

  // Создаем массив tabs на основе данных из services
  const tabs = services.map(service => ({
    name: service.title
  }));

  return (
    <Tabs tabs={tabs} content={content} />
  );
};

export default Services;