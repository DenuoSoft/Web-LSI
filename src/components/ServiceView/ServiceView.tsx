import { useParams} from 'react-router-dom';
import {services} from '../ServicesView/services-data';
import {
  ServiceBlock,
  ServiceContent,
  ServiceList,
  ServiceListBlock,
  ServiceListItem,
} from './ServiceView.styled';

interface ServiceViewProps {
  service?: typeof services[0]; // делаем опциональным для обратной совместимости
}

export const ServiceView = ({ service: propService }: ServiceViewProps) => {
  const {id} = useParams();
  // Используем переданный service или ищем по id из URL
  const service = propService || services.find((p) => p.id === Number(id));

  if (!service) {
    return <div>Service not found</div>;
  }
  
  return (
    <ServiceBlock>
      <ServiceContent>
        
        {service.description && <p>{service.description}</p>}
      </ServiceContent>
      <ServiceListBlock>
        <ServiceList>
          {service.list.map((item, index) => (
            <ServiceListItem key={index}>{item}</ServiceListItem>
          ))}
        </ServiceList>
      </ServiceListBlock>
    </ServiceBlock>
  );
};

export default ServiceView;