import {useNavigate} from 'react-router-dom';
import {ArrowRight} from '../../assets/img/arrow-right';
import {people} from './people-data';
import {
	ItemBadge,
	ItemBadgeWrap,
	ItemTitle,
	ItemWrap,
	PeopleBlock,
	PeopleImg,
	PeopleItem,
	PeopleWrap,
} from './PeopleView.styled';
import { ItemIcon } from '../../styles/shared';

export const PeopleView = () => {
	const navigate = useNavigate();

	const handlePersonClick = (lawerId: number) => {
		navigate(`/person/${lawerId}`);
	};

	return (
		<>
			<h1>Our Legal Experts</h1>

			<PeopleBlock>
				{people.map((lawer) => (
					<PeopleItem key={lawer.id}>
						<PeopleWrap>
							<PeopleImg style={{backgroundImage: `url(${lawer.img})`}} />
							<ItemBadgeWrap>
								{lawer.badge.map((item, index) => (
									<ItemBadge key={index}>{item}</ItemBadge>
								))}
							</ItemBadgeWrap>
						</PeopleWrap>

						<ItemWrap onClick={() => handlePersonClick(lawer.id)}>
							<ItemTitle>{lawer.title}</ItemTitle>
							<ItemIcon >
								<ArrowRight />
							</ItemIcon>
						</ItemWrap>
					</PeopleItem>
				))}
			</PeopleBlock>
		</>
	);
};
