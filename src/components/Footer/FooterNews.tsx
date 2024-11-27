// Переиспользуемый компонент в Footer для отображения одинаковых блоков новостей.

import { IFooterListItem } from "./Footer";

interface FooterItemProps {
  item: IFooterListItem;
}
export const FooterNews: React.FC<FooterItemProps> = ({ item }) => {
    return (
        <div className="low-news-container">
          <div className="low-news">
            <div className="low-news-title">{item.title}</div>
            <div className="low-news-weather">
              <div className="temperature">
                <div className="current-temperature">
                  <h2>{item.h1}</h2>
                </div>
                <div className="weather-description">
                  <h4>{item.h2}</h4>
                  <h4>{item.h3}</h4>
                </div>
              </div>
            </div>
            <div className="post">{item.post}</div>
            <div className="weather-news-title">{item.news_title}</div>
          </div>
          <div className="weather-news-description">
            <ul>
              <li>{item.description1}</li>
              <li>{item.description2}</li>
              <li>{item.description3}</li>
            </ul>
          </div>
        </div>
    )
}

export default FooterNews;