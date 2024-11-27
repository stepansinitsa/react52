// Компонент, отвечающий за верхний блок новостей, курс валюты и ссылки на сервисы Яндекса.

export interface IHeaderList {
    list1: string[]
    list2: string[]
    list3: string[]
    list4: string[]
}

export interface HeaderProps {
    data: IHeaderList;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
    return (
        <header className="header">
        <div className="title">
          <ul>
            {data.list1.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="high-news">
          <ul>
            {data.list2.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
          </ul>
        </div>
        <div className="exchange-rates">
          <ul>
            {data.list3.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
          </ul>
        </div>
        <div className="news-items">
          <ul>
            {data.list4.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
          </ul>
        </div>
      </header>
    )
}

export default Header;