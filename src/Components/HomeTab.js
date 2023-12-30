import { useEffect } from "react";

const HomeTab = ({ tab, setTab }) => {



    return (<>
        <nav className="post_nav">
            <div className="navitem active" onClick={() => setTab('all')}>Latest</div>
            <div className="navitem" onClick={() => setTab('React')}>React</div>
            <div className="navitem" onClick={() => setTab('.Net')}>.Net</div>
            <div className="navitem">Agile</div>
            <div className="navitem">Geospatial</div>
        </nav>
    </>)
}

export default HomeTab;