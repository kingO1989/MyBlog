import { useEffect, useState } from "react";

const HomeTab = ({ tab, setTab, displayPostState, setDisplayPostState }) => {

    const [activeNavItem, setactiveNavItem] = useState();

    function selectTab(e) {
        console.log(e);
        let text = e.target.innerHTML; //selected inner html value
        e.target.className += " active"; // update class name to reflect as active

        console.log(text);
        console.log(e.target.className);
        if (activeNavItem) {

            //assuming an active nav item has been set
            activeNavItem.className = "navitem";
            setactiveNavItem(() => e.target);
        }
        else {
            setactiveNavItem(() => e.target);
        }
        setTab(text);
        setDisplayPostState(false)
    }

    useEffect(
        () => {
            console.log(tab)
        }
        , [tab]);

    return (<>
        <nav className="post_nav" data_test="tabitems" >
            <div className="navitem" onClick={(e) => selectTab(e)}>Latest</div>
            <div className="navitem" onClick={(e) => selectTab(e)}>React</div>
            <div className="navitem" onClick={(e) => selectTab(e)}>.Net</div>
            <div className="navitem">Agile</div>
            <div className="navitem">Geospatial</div>
        </nav>
    </>)
}

export default HomeTab;