//import { InsightsView } from "../components/InsightsView/InsightsView";
import { InsightsView } from "../components/InsightsView/InsightsView";
import { Tabs } from "../components/Tabs/Tabs";
import { EventsView } from "../components/EventsView/EventsView";

export const Insights = () => {

  const eventContent = <EventsView />;
  const insightContent = <InsightsView />;

  const content = {
    Insights: insightContent,
    Events: eventContent,
  };

  const tabs = [{name: 'Insights'}, {name: 'Events'}];

  return (
    
    <Tabs tabs={tabs} content={content}/>
  );
}
