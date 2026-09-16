import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {events} from './events-data';
import {
	EventPageBlock,
	NavBack,
	NavBackText,
	SelectedItem,
} from './EventsView.styled';
import {ItemIcon} from '../../styles/shared';
import {ArrowLeft} from '../../shared/arrow-left';

export const EventPage = () => {
	const {id} = useParams<{id: string}>();
	const event = events.find((item) => String(item.id) === id);
	const navigate = useNavigate();

	if (!event) {
		return <Navigate to="/insights" replace />;
	}
	return (
		<EventPageBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon>
					<ArrowLeft />
				</ItemIcon>
				<NavBackText>Back to Insights</NavBackText>
			</NavBack>
			<SelectedItem>
				<h2>{event.title}</h2>
				<p>
					<strong>Date:</strong> {event.date}
				</p>

				<p>{event.text}</p>
			</SelectedItem>
		</EventPageBlock>
	);
};
