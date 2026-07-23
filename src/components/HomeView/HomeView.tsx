import {
	HomeBlock,
	HomeText,
	HomeTextBlock,
	HomeTitle,
	ImgBlock,
	ImgContainer,

} from './HomeView.styled';


export const HomeView = () => {
	
	return (
		<HomeBlock>
			<HomeTextBlock>
				<HomeTitle>
					Full-service law firm 
				</HomeTitle>
				  
				<HomeText>
					<p>
					Denuo is headquartered in Dubai,
					providing high-quality legal and tax advice to international businesses,
					investors and private clients.
					</p>
					<p>
						Our team has extensive international experience, including 17 years as part of the global law firm DLA Piper, and continues to deliver legal services to the same high standards.
					</p>
					<p>
						We combine lawyers with strong international and local backgrounds, advising clients on complex legal and tax matters across corporate, tax, regulatory and dispute resolution.
					</p>
					<p>
						Our approach is centered on developing practical and legally robust solutions tailored to our clients’ commercial objectives.
						We work closely with our clients to understand their business, identify key risks and opportunities, and deliver clear, pragmatic and outcome-driven advice.
					</p>
				</HomeText>
			</HomeTextBlock>
			<ImgContainer>
				<ImgBlock />
			</ImgContainer>
		</HomeBlock>
	);
};