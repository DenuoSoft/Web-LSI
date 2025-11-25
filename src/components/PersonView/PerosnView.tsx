import {useParams, useNavigate} from 'react-router-dom';
import {people} from '../PeopleView/people-data';
import {
  Description,
	InfoBlock,
	ItemIcon,
	ItemTitle,
	NavBack,
	NavBackText,
	PersonBlock,
	PersonImg,
	PersonWrap,
} from './PersonView.styled';
import {ItemBadge, ItemBadgeWrap} from '../PeopleView/PeopleView.styled';
import {ArrowLeft} from '../../assets/img/arrow-left';

export const PersonView = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	const person = people.find((p) => p.id === Number(id));

	if (!person) {
		return <div>Person not found</div>;
	}

	return (
		<PersonBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon >
					<ArrowLeft />
        </ItemIcon>
        <NavBackText>Back to people</NavBackText>
			</NavBack>

			<PersonWrap>
				<PersonImg style={{backgroundImage: `url(${person.img})`}} />

				<InfoBlock>
					<ItemTitle>{person.title}</ItemTitle>
					<ItemBadgeWrap>
						{person.badge.map((badge, index) => (
							<ItemBadge key={index}>{badge}</ItemBadge>
						))}
          </ItemBadgeWrap>
          <Description>
            {person.about}
          </Description>
				</InfoBlock>
			</PersonWrap>

			{/* Добавьте остальные данные которые хотите отобразить */}
		</PersonBlock>
	);
};
