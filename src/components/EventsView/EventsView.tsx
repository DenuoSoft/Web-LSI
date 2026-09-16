import {memo} from 'react';
import {events} from './events-data';
import {EventsBlock, EventsItem} from './EventsView.styled';
import {Link} from 'react-router-dom';

export const EventsView = memo(() => {
	// Функция для обрезки текста до 100 символов
	const truncateText = (text: string, maxLength: number = 100) => {
		if (text.length <= maxLength) return text;
		return text.slice(0, maxLength) + '...';
	};

	return (
		<EventsBlock>
			{events.map((event) => (
				<EventsItem key={event.id} style={{cursor: 'pointer'}}>
					<Link to={`/events/${event.id}`}>
						<h2>{event.title}</h2>
						<p>{event.date}</p>
						<p>{truncateText(event.text)}</p>
					</Link>
				</EventsItem>
			))}
		</EventsBlock>
	);
});