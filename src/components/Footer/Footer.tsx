// Компонент, отвечающий за Список погода и новостей под строкой поиска

import FooterNews from "./FooterNews"

export interface IFooterListItem {
    title?: string
    h1?: string
    h2?: string
    h3?: string
    post?: string
    news_title?: string
    description1?: string
    description2?: string
    description3?: string
}
  
export interface IFooterList {
    list1: IFooterListItem[]
    list2: IFooterListItem[]
    list3: IFooterListItem[]
}

interface FooterListProps {
    footerNewsList: IFooterList;
}

const Footer: React.FC<FooterListProps> = ({ footerNewsList }) => {
    return (
        <footer className="footer">
            <FooterNews item={footerNewsList.list1[0]} />
            <FooterNews item={footerNewsList.list2[0]} />
            <FooterNews item={footerNewsList.list3[0]} />
        </footer>
    )
}

export default Footer;