import {useParams, useNavigate} from 'react-router-dom';
import React from 'react';
import {
	getPersonById,
	getPersonJsonData,
} from '../PeopleView/people-data';
import {
	Description,
	InfoBlock,
	ItemTitle,
	NavBack,
	NavBackText,
	PersonBlock,
	PersonEmail,
	PersonImg,
	PersonItem,
	PersonWrap,
	PositionTitle,
} from './PersonView.styled';
import {ItemBadge, ItemBadgeWrap} from '../PeopleView/PeopleView.styled';
import {ArrowLeft} from '../../assets/img/arrow-left';
import {ItemIcon} from '../../styles/shared';
import type { FormattedPart, ContentItem, ListItem } from '../../models/people-model';

export const PersonView = () => {
	const {id} = useParams();
	const navigate = useNavigate();

	// Получаем данные человека из people-data.ts
	const person = getPersonById(Number(id));
	
	// Получаем JSON данные
	const jsonData = getPersonJsonData(Number(id));
    
	if (!person) {
		return <div>Person not found</div>;
	}

	const renderFormattedText = (formatted: FormattedPart[] | string, hyperlinks?: Record<string, string>) => {
		if (typeof formatted === 'string') {
			return <span>{formatted}</span>;
		}

		return formatted.map((part, index) => {
			const {text, formatting, hyperlink} = part;
			const styles: React.CSSProperties = {
				fontWeight: formatting.bold ? 'bold' : 'normal',
				fontStyle: formatting.italic ? 'italic' : 'normal',
				textDecoration: formatting.underline ? 'underline' : 'none',
				textDecorationLine: formatting.strike ? 'line-through' : 'none',
				verticalAlign: formatting.superscript ? 'super' : 'baseline',
			};

			if (hyperlink && hyperlinks) {
				return (
					<a
						key={index}
						href={hyperlinks[hyperlink] || '#'}
						target="_blank"
						rel="noopener noreferrer"
						style={styles}
					>
						{text}
					</a>
				);
			}

			return (
				<span key={index} style={styles}>
					{text}
				</span>
			);
		});
	};

	// Рендерим весь контент из JSON в Description
	const renderAllContent = () => {
		if (!jsonData || !jsonData.content) return null;

		return jsonData.content.map((item: ContentItem, index: number) => {
			switch (item.type) {
				case 'heading': {
					const level = Math.min(item.level || 1, 6);
					const headingContent = item.formatted_text 
						? renderFormattedText(item.formatted_text, jsonData?.hyperlinks) 
						: item.text;
					
					return React.createElement(
						`h${level}`,
						{ key: `heading-${index}`, style: { marginTop: '1.5rem', marginBottom: '0.5rem' } },
						headingContent
					);
				}

				case 'paragraph': {
					// Проверяем, является ли параграф строкой таблицы
					const isTableRow = item.style === 'TableRow';
					const paragraphStyle: React.CSSProperties = {
						marginBottom: '0.5rem',
						...(isTableRow && { 
							paddingLeft: '1rem',
							borderLeft: '3px solid #e0e0e0',
							paddingTop: '0.25rem',
							paddingBottom: '0.25rem',
							backgroundColor: index % 2 === 0 ? '#fafafa' : 'transparent',
						})
					};

					return (
						<p key={`paragraph-${index}`} style={paragraphStyle}>
							{item.formatted_text ? renderFormattedText(item.formatted_text, jsonData?.hyperlinks) : item.text}
						</p>
					);
				}

				case 'list':
					return (
						<ul 
							key={`list-${index}`} 
							style={{ 
								listStyleType: item.list_type === 'numbered' ? 'decimal' : 'disc',
								paddingLeft: '2rem',
								marginBottom: '0.5rem'
							}}
						>
							{item.items?.map((listItem: ListItem, itemIndex: number) => (
								<li 
									key={`list-item-${index}-${itemIndex}`}
									style={{ 
										marginLeft: `${(listItem.level || 0) * 1.5}rem`,
										marginBottom: '0.25rem'
									}}
								>
									{listItem.formatted_text ? renderFormattedText(listItem.formatted_text, jsonData?.hyperlinks) : listItem.text}
								</li>
							))}
						</ul>
					);

				default:
					return null;
			}
		});
	};

	return (
		<PersonBlock>
			<NavBack onClick={() => navigate(-1)}>
				<ItemIcon>
					<ArrowLeft />
				</ItemIcon>
				<NavBackText>Back to people</NavBackText>
			</NavBack>

			<PersonWrap>
				<PersonItem>
					<PersonImg style={{backgroundImage: `url(${person.img})`}} />
					<ItemTitle>{person.title}</ItemTitle>
					
					
					{person.position && <PositionTitle>{person.position}</PositionTitle>}
					<PersonEmail>
						{ person.email}
					</PersonEmail>
					<ItemBadgeWrap>
						{person.badge.map((badge, index) => (
							<ItemBadge key={index}>{badge}</ItemBadge>
						))}
					</ItemBadgeWrap>
				</PersonItem>
				
				<InfoBlock>
					
					
					
					<Description>
						{renderAllContent()}
					</Description>
				</InfoBlock>
			</PersonWrap>
		</PersonBlock>
	);
};