import {useEffect, useState} from 'react';
import {
	TabContent,
	TabsAkkut,
	TabsAkkutImg,
	TabsBlock,
	TabsImg,
	TabsItem,
	TabsWrap,
} from './Tabs.styled';
import type {TabsProps, TabItem} from '../../models/tabs';
import image from '../../assets/img/insight.jpg';

interface TabsExtendedProps extends TabsProps {
	images?: Record<string, string>; // имя таба → картинка
}

export const Tabs = ({tabs, content, variant, images}: TabsExtendedProps) => {
	const [activeTab, setActiveTab] = useState(tabs[0].name);
	const activeImage = images?.[activeTab];
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true));
		return () => cancelAnimationFrame(id);
	}, []);

	return (
		<TabsWrap $variant={variant}>
			<TabsBlock $variant={variant}>
				{tabs.map((tab: TabItem) => (
					<TabsItem
						key={tab.name}
						$variant={variant}
						onClick={() => setActiveTab(tab.name)}
						$isActive={activeTab === tab.name}
					>
						<span className="tab-text">{tab.name}</span>
					</TabsItem>
				))}
			</TabsBlock>

			{/* TabsAkkut — картинка активного таба */}
			<TabsAkkut $variant={variant} $visible={visible}>
				{variant === 'services' && activeImage && (
					<TabsAkkutImg src={activeImage} alt={activeTab} />
				)}
			</TabsAkkut>
			<TabContent $variant={variant}>{content[activeTab]}</TabContent>
			<TabsImg $variant={variant}>
				<img src={image} />
			</TabsImg>
		</TabsWrap>
	);
};
