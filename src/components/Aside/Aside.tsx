// Компонент, отвечающий за боковую рекламу и баннер Ча/Ща

export interface IAsideList {
    img: string;
    p1: string;
    p2: string;
}

const Aside: React.FC<{ asideList: IAsideList }> = ({ asideList }) => {
    return (
        <aside className="aside">
          <img className="logo3" src={asideList.img} alt="..." />
          <p>{asideList.p1}</p>
          <p>{asideList.p2}</p>
        </aside>
    )
}

export default Aside;