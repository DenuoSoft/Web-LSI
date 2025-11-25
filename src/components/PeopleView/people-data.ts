import type {peopleProps} from '../../models/people-model';
import sosedkin from '../../assets/img/sosedkin.jpg';
import scott from '../../assets/img/scott.jpg';
import lamzin from '../../assets/img/lamzin.jpg';
import panov from '../../assets/img/panov.png';
import naberezhnaya from '../../assets/img/naberezhnaya.jpg';
import alterman from '../../assets/img/alterman.jpg';
import boikov from '../../assets/img/boikov.jpg';
import klushin from '../../assets/img/klushin.jpg';

export const people: peopleProps[] = [
	{
		id: 1,
		title: 'Denis Sosedkin',
		img: sosedkin,
		badge: ['Corporate', 'M&A', 'Investment law'],
		about:
			'Denis Sosedkin has considerable experience in corporate, M&A and investment law. He is a recognised expert in M&A and has led several major sales and acquisitions in food and beverages, telecommunications, commercial real estate, manufacturing, retail and transportation, including a number of the largest deals in Moscow and north-west Russia. Denis has been heavily involved in several major startup investment projects throughout Russia, where he has advised clients on various issues during the initial investment stages (including, structuring, real estate and construction, corporate, tax and customs issues) and, subsequently, in relation to their operational stages.',
		position: 'Partner, Head of Coporate'
	},
	{
		id: 2,
		title: 'Scott Antel',
		img: scott,
		badge: ['Corporate', 'finance'],
		about: '',
		position: 'Partner'
	},
	{
		id: 3,
		title: 'Philip Lamzin',
		img: lamzin,
		badge: ['Corporate', 'Finance', 'Commercial law', 'Infrastructure'],
		about: 'Philip Lamzin has extensive experience in various aspects of finance, corporate and commercial law specifically in the transport sector and in relation to infrastructure projects. Philip is widely recognised as one of the leading aviation, shipping and asset finance lawyers in the Russian market. He has unique experience of advising leading international and Russian leasing companies, banks, airlines and shipowners on complex aircraft and ship finance and leasing as well as project finance transactions. Philip is recommended in aviation, shipping, transport, and finance and banking law by Chambers, Legal 500 and Pravo-300.',
		position: 'Partner'
	},
	{
		id: 4,
		title: 'Andrey Panov',
		img: panov,
		badge: ['Arbitration', 'Litigation'],
		about:
			'Andrey is one of the most acclaimed professionals in international arbitration and litigation. With dual qualification as a Russian lawyer and English solicitor advocate, he has over 14 years of experience representing clients in arbitrations around the world, as well as in Russian courts. Andrey regularly acts as lead counsel in his cases. He has cross-examined fact and expert witnesses in front of civil law, common law and mixed tribunals in English and Russian. Andrey has conducted his own advocacy in numerous arbitration matters under a variety of arbitration rules, including those of the Arbitration Centre at the Russian Union of Industrialists and Entrepreneurs, the Arbitration Institute of the Stockholm Chamber of Commerce, the International Chamber of Commerce, the International Commercial Arbitration Court at the Chamber of Commerce and Industry of the Russian Federation, the London Court of International Arbitration and the Singapore International Arbitration Centre, governed by Cypriot, Dutch, English, French, German, Russian, Swedish and Swiss law. He also regularly sits as an arbitrator in international and domestic cases.',
		position: 'Partner'
	},
	{
		id: 5,
		title: 'Julia Naberezhnaya',
		img: naberezhnaya,
		badge: ['Tax', 'Exchange law', 'Budget law'],
		about: 'Julia Naberezhnaya is a tax expert with extensive experience in tax, exchange and budget law. Julia’s professional practice focuses on international tax planning. Julia participates in projects on international planning and the structuring of transactions involving foreign jurisdictions, which allows clients to find effective solutions for doing business on a global level. A prominent place is held by projects on the redomiciliation of foreign companies both to the Russian Federation and to other foreign jurisdictions. In addition, Julia deals with taxation issues in the UAE and other Middle East countries.',
		position: 'Senior Associate'
	},
	{
		id: 6,
		title: 'Maria Alterman',
		img: alterman,
		badge: ['Commercial', 'Regulatoy'],
		about: 'Maria Alterman focuses on advising clients on a wide range of general business law matters, including commercial and regulatory questions. Maria represents clients in connection with the sale and purchase of business and assets as well as with setting up the joint ventures. Maria also advises clients on the matters arising in connection with structuring the investment. Maria has considerable experience in FMCG and pharmaceuticals sectors. Maria was lead lawyer of the team advising on the launch of a novel consumer product category in the Eastern Europe markets, starting from identifying the applicable regulatory treatment, arranging for the import and sales contractual set-up, leading the negotiations with both offline and e-commerce sales operators, up to supporting the client in administrative and court disputes arising in connection with the product expansion.',
		position: 'Legal director'
	},
	{
		id: 7,
		title: 'Dmitry Boikov',
		img: boikov,
		badge: ['Coroprate', 'Commercial', 'M&A', 'Joint ventures'],
		about: 'Dmitry Boikov advises foreign and Russian clients on various aspects of Russian corporate and commercial law. Dmitry assists in implementing M&A deals, advising clients on corporate governance, joint ventures, group structuring and Russian countersanctions.',
		position: 'Senior Associate'
	},
	{
		id: 8,
		title:'Igor Klushin',
		img: klushin,
		badge: ['Sanctions', 'Litigation', 'Internaional arbitration'],
		about: 'Igor Klushin advises on EU, UK, US and Swiss sanctions and represents clients in liaising with foreign sanctions regulators. In addition to his work on sanctions law, Igor focuses on litigation and international arbitration. He represents clients both in international arbitrations under a variety of arbitration rules, including those of the Arbitration Institute of the Stockholm Chamber of Commerce, the Hong Kong International Arbitration Centre, the International Chamber of Commerce, the International Commercial Arbitration Court at the Chamber of Commerce and Industry of the Russian Federation, and in litigations in Russia, primarily in corporate and commercial disputes.',
		position: 'Senior Associate, MCIArb'
	},
];
