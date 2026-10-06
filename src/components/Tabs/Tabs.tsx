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
	const [activeTab, setActiveTab] = useState(tabs[0].name);
	const [hoveredTab, setHoveredTab] = useState<string | null>(null);
	const [visible, setVisible] = useState(false);

	// при наведении показываем картинку hover-таба, иначе — активного
	const displayedTab = hoveredTab ?? activeTab;
	const displayedImage = images?.[displayedTab];

	useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(id);
	}, []);

	const openService = (name: string) => navigate('/capaview', {state: {service: name}});

	// первый клик выбирает таб, повторный клик по активному открывает страницу
	const handleTabClick = (name: string) => {
		if (variant === 'services' && name === activeTab) {
			openService(name);
			return;
		}
		setActiveTab(name);
	};

	const renderBlock = (list: TabItem[], side?: 'left' | 'right') => (
		<TabsBlock
			$variant={variant}
			$side={side}
			onMouseLeave={() => setHoveredTab(null)}
		>
			{list.map((tab: TabItem) => (
				<TabsItem
					key={tab.name}
					$variant={variant}
					$side={side}
					onClick={() => handleTabClick(tab.name)}
					onMouseEnter={() => setHoveredTab(tab.name)}
					onFocus={() => setHoveredTab(tab.name)}
					onBlur={() => setHoveredTab(null)}
					$isActive={activeTab === tab.name}
				>
					<span className="tab-text">{tab.name}</span>
				</TabsItem>
			))}
		</TabsBlock>
	);

	// для services делим табы пополам: слева / справа от картинки
	const half = Math.ceil(tabs.length / 2);
	const leftTabs = tabs.slice(0, half);
	const rightTabs = tabs.slice(half);

	const akkut = (
		<TabsAkkut $variant={variant} $visible={visible}>
			{variant === 'services' && displayedImage && (
				<TabsAkkutImg
					key={displayedTab}
					src={displayedImage}
					alt={displayedTab}
				/>
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
						{displayedImage && (
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