import { services } from './services-data';
//import type { servicesProps } from '../../models/services-model';
import { ServiceContent } from '../ServiceView/ServiceView.styled';
import { ContentDescription, ContentList, ContentText, ContentTitle, ListItem, VerticalTabsWrapper } from './Services.styled';
import { Tabs } from '../Tabs/Tabs';

export const ServicesTabs = () => {
  const tabs = services.map(service => ({
    name: service.title,
    label: service.title
  }));
 const content = services.reduce((acc, service) => {
    acc[service.title] = (
      <ServiceContent>
        <ContentTitle>{service.title}</ContentTitle>
        <ContentText>{service.text}</ContentText>
        <ContentList>
          {service.list.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ContentList>
        {service.description && (
          <ContentDescription>{service.description}</ContentDescription>
        )}
      </ServiceContent>
    );
    return acc;
  }, {} as Record<string, React.ReactNode>);

  return (
    <VerticalTabsWrapper>
      <Tabs tabs={tabs} content={content} />
    </VerticalTabsWrapper>
  );
};


