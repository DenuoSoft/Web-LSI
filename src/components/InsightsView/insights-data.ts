import type { insightsProps } from '../../models/insights-model';
import { normalizeFullText } from '../../models/insights-model';
import arbitraryDismissal from '../../data/Arbitrary Dismissal.json';
import interestedParty from '../../data/Interested Party Transaction.json';
import increasingTerritorial from '../../data/Increasing territorial capabilities.json';
import sportsEntertainment from '../../data/Sports&Entertainment.json';

export const insights: insightsProps[] = [
    {
		id: 1,
		title: 'Interested Party Transaction',
		text: "In today's post, Dmitry Boikov, Senior Associate, will discuss the specifics of UAE Business Companies Act No. 32 (2021) concerning transactions involving conflicts of interest and related parties. Estimated reading time - 5 minutes.",
		date: '23.11.2025',	
		fullText:  normalizeFullText(interestedParty?.content || [])
	},
	
	{
		id: 2,
		title: 'Increasing Territorial Capabilities',
		text: "Last week, a Dubai Executive Council Resolution entered into force that expands the scope for companies registered in Dubai's free zones to conduct business outside of the free zone. The Resolution is analysed by Senior Associate Dmitry Boikov. Estimated reading time - 3 minutes.",
		date: '21.03.2025',
		fullText: normalizeFullText(increasingTerritorial?.content || [])
	},
	{
		id: 3,
		title: 'Sports & Entertainment',
		text: "The creation of a first-of-its-kind free zone in Dubai focused on the sports and entertainment industry, the International Sports and Entertainment Zone (ISEZA), was announced on Tuesday. Senior Associate Dmitry Boikov speaks about the new free zone. Estimated reading time - 2 minutes.",
		date: '13.03.2025',
		fullText: normalizeFullText(sportsEntertainment?.content || [])
	},
	{
		id: 4,
		title: 'Denuo lawyer passes UAE Corporate Tax exam',
		text: "Senior Tax Associate, Julia Naberezhnaya, has successfully passed the UAE Corporate Tax exam and is now undergoing registration as a UAE Tax Agent. This achievement highlights Julia's high level of professionalism and will also allow us to provide even more effective support on tax matters in the UAE and offer our clients a broader range of services. We congratulate Julia and wish her continued success and professional achievements!",
		date: '05.02.2025',
		fullText: []
    },
	{
		id: 5,
		title: 'Arbitrary Dismissal',
		text: "A common category of disputes arising when dismissing employees at the initiative of the employer are disputes over the payment of compensation by employers to employees. In today's post, associate Dmitry Boikov will explain how this issue is regulated under UAE law. Estimated reading time - 4 minutes.",
		date: '14.11.2024',	
		fullText: normalizeFullText(arbitraryDismissal?.content || [])
	},
	
];
