import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
	TabContent,
	TabsAkkut,
	TabsAkkutImg,
	TabsBlock,
	TabsCenter,
	TabsCta,
	TabsImg,
	TabsItem,
	TabsWrap,
} from './Tabs.styled';
import type {TabsProps, TabItem} from '../../models/tabs';
import image from '../../assets/img/insight.jpg';
import {RoundButton} from '../../shared/buttons/RoundButton';

interface TabsExtendedProps extends TabsProps {
	images?: Record<string, string>; // имя таба → картинка
}

export const Tabs = ({tabs, content, variant, images}: TabsExtendedProps) => {
	const navigate = useNavigate();
	// таб становится активным при наведении и остаётся им,
	// пока пользователь не наведёт курсор на другой таб
	const [activeTab, setActiveTab] = useState(tabs[0].name);
	const [visible, setVisible] = useState(false);

	const activeImage = images?.[activeTab];

	useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(id);
	}, []);

	const openService = (name: string) => navigate('/capaview', {state: {service: name}});

	const handleTabClick = (name: string) => {
	
		if (variant === 'services') {
			openService(name);
			return;
		}
		setActiveTab(name);
	};

	const renderBlock = (list: TabItem[], side?: 'left' | 'right') => (
		<TabsBlock $variant={variant} $side={side}>
			{list.map((tab: TabItem) => (
				<TabsItem
					key={tab.name}
					$variant={variant}
					$side={side}
					onClick={() => handleTabClick(tab.name)}
					onMouseEnter={() => setActiveTab(tab.name)}
					onFocus={() => setActiveTab(tab.name)}
					$isActive={activeTab === tab.name}
				>
					<span className="tab-text">{tab.name}</span>
				</TabsItem>
			))}
		</TabsBlock>
	);


	const half = Math.ceil(tabs.length / 2);
	const leftTabs = tabs.slice(0, half);
	const rightTabs = tabs.slice(half);

	const akkut = (
		<TabsAkkut $variant={variant} $visible={visible}>
			{variant === 'services' && activeImage && (
				<TabsAkkutImg key={activeTab} src={activeImage} alt={activeTab} />
			)}
		</TabsAkkut>
	);

	return (
		<TabsWrap $variant={variant}>
			{variant === 'services' ? (
				<>
					{renderBlock(leftTabs, 'left')}

					<TabsCenter>
						{akkut}
						{activeImage && (
							<TabsCta>
								<RoundButton
									variant="capa"
									onClick={() => openService(activeTab)}
								>
									Read more
								</RoundButton>
							</TabsCta>
						)}
					</TabsCenter>

					{renderBlock(rightTabs, 'right')}
				</>
			) : (
				<>
					{renderBlock(tabs)}
					{akkut}
				</>
			)}

			<TabContent $variant={variant}>{content[activeTab]}</TabContent>

			<TabsImg $variant={variant}>
				<img src={image} />
			</TabsImg>
		</TabsWrap>
	);
};