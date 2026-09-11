import {
  ServiceBlock,
  ServiceContent,
  ServiceList,
  ServiceListItem,
} from './ServiceView.styled';
import type { servicesProps } from '../../models/services-model';
import { memo } from 'react';

interface ServiceViewProps {
  service: servicesProps;
}

export const ServiceView = memo(({ service }: ServiceViewProps) => {
  return (
    <ServiceBlock>
      <ServiceContent>
        {service.description && <p>{service.description}</p>}
      </ServiceContent>

      <ServiceList>
        {service.list.map((item, index) => (
          <ServiceListItem key={index}>{item}</ServiceListItem>
        ))}
      </ServiceList>
    </ServiceBlock>
  );
});

export default ServiceView;