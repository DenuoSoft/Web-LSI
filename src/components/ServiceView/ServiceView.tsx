import {useNavigate, useParams} from 'react-router-dom';
import {services} from '../ServicesView/services-data';
import { NavBack, NavBackText, ServiceBlock } from './ServiceView.styled';
import { ArrowLeft } from '../../assets/img/arrow-left';
import { ItemIcon } from '../../styles/shared';

export const ServiceView = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	const service = services.find((p) => p.id === Number(id));

	if (!service) {
		return <div>Service not found</div>;
	}
	return (
		<ServiceBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon>
					<ArrowLeft />
				</ItemIcon>
				<NavBackText>Back to services</NavBackText>
      </NavBack>
      <h1>{service.title}</h1>
      <span>{service.text}</span>
      
		</ServiceBlock>
	);
};

export default ServiceView;
