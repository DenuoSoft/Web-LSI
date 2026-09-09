import { useState } from 'react';
import { TabContent, TabsAkkut, TabsBlock, TabsItem, TabsWrap } from './Tabs.styled';
import type { TabsProps, TabItem } from '../../models/tabs';

export const Tabs = ({ tabs, content }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <TabsWrap>
            <TabsBlock>
                {tabs.map((tab: TabItem) => (
                    <TabsItem
                        key={tab.name}
                        onClick={() => handleTabClick(tab.name)}
                        $isActive={activeTab === tab.name}
                    >
                         <span className="tab-text">{tab.name}</span> 
                       
                    </TabsItem>
                ))}
            </TabsBlock>
            <TabsAkkut>

            </TabsAkkut>
            <TabContent>{content[activeTab]}</TabContent>
        </TabsWrap>
    );
};