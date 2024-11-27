// Компонент, отвечающий за логотип Яндекса, строку поиска, подсказку под ней и рекламный баннер Форсажа.

export interface MainList {
    img1: string;
    p: string;
    img2: string;
}

const MainContainer: React.FC<{ MainContainerList: MainList }> = ({ MainContainerList }) => {
    return (
        <main className="main-container">
        <div className="search-menu">
          <img className="logo" src={MainContainerList.img1} alt="Yandex" />
          <input className="search-input" type="text" />
          <button className="button">Найти</button>
        </div>
        <div className="clue-input">
          <p>{MainContainerList.p}</p>
        </div>
        <img className="logo2" src={MainContainerList.img2} alt="Форсаж" />
      </main>
    )
}

export default MainContainer;

