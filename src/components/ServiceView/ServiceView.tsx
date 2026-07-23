import {useNavigate, useParams} from 'react-router-dom';
import {services} from '../ServicesView/services-data';
import {
	NavBack,
	NavBackText,
	ServiceBlock,
	ServiceContent,
	ServiceList,
	ServiceListBlock,
	ServiceListItem,
} from './ServiceView.styled';
import {ArrowLeft} from '../../assets/img/arrow-left';
import {ItemIcon} from '../../styles/shared';

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
			<ServiceContent>
				<h1>{service.title}</h1>
			</ServiceContent>
			<ServiceListBlock>
				<ServiceList>
					{service.list.map((list, index) => (
						<ServiceListItem key={index}>{list}</ServiceListItem>
					))}
				</ServiceList>
			</ServiceListBlock>
		</ServiceBlock>
	);
};

export default ServiceView;
