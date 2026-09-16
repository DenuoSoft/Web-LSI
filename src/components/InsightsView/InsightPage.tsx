import {useParams, useNavigate, Navigate} from 'react-router-dom';
import {insights} from './insights-data';
import {
	InsightPageBlock,
	InsightPageContent,
	InsightPageTitle,
	InsightPageWrap,
	NavBack,
	NavBackText,
} from './InsightsView.styled';
import {ContentRenderer} from './InsightsContent';
import {ItemIcon} from '../../styles/shared';
import {ArrowLeft} from '../../shared/arrow-left';

export const InsightPage = () => {
	const {id} = useParams<{id: string}>();

	const insight = insights.find((item) => String(item.id) === id);
	const navigate = useNavigate();

	if (!insight) {
		return <Navigate to="/insights" replace />;
	}

	return (
		<InsightPageBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon>
					<ArrowLeft />
				</ItemIcon>
				<NavBackText>Back to Insights</NavBackText>
			</NavBack>
			<InsightPageWrap>
				<InsightPageTitle>
					<h2>{insight.title}</h2>
					<p>
						<strong>Date:</strong> {insight.date}
					</p>
				</InsightPageTitle>
				<InsightPageContent style={{position: 'relative'}} id="modal-content">
					{insight.fullText && insight.fullText.length > 0 ? (
						<ContentRenderer content={insight.fullText} />
					) : (
						<p>{insight.text}</p>
					)}
				</InsightPageContent>
			</InsightPageWrap>
		</InsightPageBlock>
	);
};
