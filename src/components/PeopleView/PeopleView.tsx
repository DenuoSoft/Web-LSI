import {useNavigate} from 'react-router-dom';
import {people} from './people-data';
import {
	ButtonReveal,
	ImageBlock,
	ImageWrap,
	ItemTitle,
	ItemWrap,
	PeopleImg,
	PeopleWrap,
	PeopleGrid,
	PeopleItem,
	PeopleTitle,
	ItemPosition,
} from './PeopleView.styled';
import {RoundButton} from '../../shared/buttons/RoundButton';
import { memo } from 'react';

export const PeopleView = memo(() => {
	const navigate = useNavigate();

	const handlePersonClick = (id: number) => {
		navigate(`/person/${id}`);
	};

	return (
		<>
			<PeopleTitle>people</PeopleTitle>
			<PeopleGrid>
				{people.map((lawer) => (
					<PeopleItem key={lawer.id}>
						<PeopleWrap>
							<ImageWrap>
								<ImageBlock>
									<PeopleImg image={lawer.img} />
								</ImageBlock>
								<ButtonReveal>
									<RoundButton
										variant="people"
										onClick={() => handlePersonClick(lawer.id)}
									>
										View Profile
									</RoundButton>
								</ButtonReveal>
								<ItemWrap>
									<ItemTitle>{lawer.title}</ItemTitle>
									<ItemPosition>{lawer.position}</ItemPosition>
								</ItemWrap>
							</ImageWrap>
						</PeopleWrap>
					</PeopleItem>
				))}
			</PeopleGrid>
		</>
	);
});