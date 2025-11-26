import {
	HomeBlock,
	HomeLabel,
	HomeText,
	HomeTextBlock,
	ImgBlock,
	LabelText,
	Stars,
	StarsBlock,
} from './HomeView.styled';
import star from '../../assets/img/star.png';

export const HomeView = () => {
	return (
		<HomeBlock>
			<HomeTextBlock>
				<HomeLabel>
					<StarsBlock>
						<Stars src={star} />
						<Stars src={star} />
						<Stars src={star} />
						<Stars src={star} />
						<Stars src={star} />
					</StarsBlock>
					<LabelText>Professional Legal Expertise</LabelText>
				</HomeLabel>
				<HomeText>
					The LSI office in UAE offers the full scope of legal services
					covering all legal issues that may arise at any stage of a project.
					Our lawyers in Dubai are well versed in local legislation and business
					practices, and are committed to the highest standards of quality. As
					an integral part of LSI’s wider international practice, Dubai is an
					important destination in our firm’s platform allowing us to handle
					complex international projects.
				</HomeText>
			</HomeTextBlock>

			<ImgBlock></ImgBlock>
		</HomeBlock>
	);
};
