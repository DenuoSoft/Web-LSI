import img1 from '../../assets/img/pic1.jpg'
import img2 from '../../assets/img/pic2.jpg'
import img3 from '../../assets/img/pic3.jpg'
import img4 from '../../assets/img/pic4.jpg'



export interface HomeDataItem {
	id: number;
	date: string;
	news: string;
	img: string;
}

export const homeData: HomeDataItem[] = [
	{
		id: 1,
		date: "19 august 2026",
		news: "News 1",
		img: img1
	},
	{
		id: 2,
		date: "18 august 2026",
		news: "News 2",
		img: img2
	},
	{
		id: 3,
		date: "17 august 2026",
		news: "News 3",
		img: img3
	},
	{
		id: 4,
		date: "16 august 2026",
		news: "News 4",
		img: img4
	}
];