import { articles } from './articles-data';
import {ArtclesBlock, ArticlesItem} from './ArticlesView.styled';

export const ArticlesView = () => {
	return (
		<>
			<h1>Articles</h1>
      <ArtclesBlock>
        {articles.map((article) => ( 
          <ArticlesItem key={article.id}> 
            <h2>{article.title}</h2>
            <p>{article.date}</p>
            <p>{article.badge}</p>
            <p>{article.text}</p>
        </ArticlesItem>
          )) }
        
      </ArtclesBlock>
		</>
	);
};
