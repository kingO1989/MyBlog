import TestRenderer from 'react-test-renderer'; // ES6
import { Main } from '../src/indexTest';

import Home from '../src/Pages/Home';
/*
Visit site-->Click on article 
login::Visit site-->Login in with Social Media provider 
like::Visit site-->Click on article --> like article
comment::Visit site-->Click on article --> Comment on article

*/

let AppRenderer;
let HomeRenderer;
beforeAll(() => {
    AppRenderer = TestRenderer.create(
        <Main />
    );

    HomeRenderer = TestRenderer.create(
        <Home />
    );
});

afterAll(() => {
    //  return clearCityDatabase();
    // AppRenderer.d
});


it("Home page contains header", async () => {

    let AppJson = AppRenderer.toJSON();

    let header = AppJson.find((t) => t.props.data_test === "header");

    expect(header).toBeTruthy()
})

it("Home page contains main section", async () => {


    let HomeJson = HomeRenderer.toJSON();

    let mainElementChildren = HomeJson.children;

    let authorscontent = mainElementChildren.find((t) => t.props.data_test === "authors_content");
    let authorscontentchildren = authorscontent.children;
    let tabItemscontainer = authorscontentchildren.find((t) => t.props.data_test === "tabitemscontainer");
    let tabItems = tabItemscontainer.children.find((t) => t.props.data_test === "tabitems");
    console.log(tabItems)
    expect(mainElementChildren.length > 0).toBeTruthy()
})



it("Home page contains authors_content", async () => {


    let HomeJson = HomeRenderer.toJSON();

    let mainElementChildren = HomeJson.children;

    let authorscontent = mainElementChildren.find((t) => t.props.data_test === "authors_content");
    let authorscontentchildren = authorscontent.children;

    expect(authorscontentchildren.length > 0).toBeTruthy()
})


it("authors_content contains tabitems", async () => {


    let HomeJson = HomeRenderer.toJSON();

    let mainElementChildren = HomeJson.children;

    let authorscontent = mainElementChildren.find((t) => t.props.data_test === "authors_content");
    let authorscontentchildren = authorscontent.children;
    let tabItemscontainer = authorscontentchildren.find((t) => t.props.data_test === "tabitemscontainer");
    let tabItems = tabItemscontainer.children.find((t) => t.props.data_test === "tabitems");
    console.log(tabItems)
    expect(tabItems.children.length > 0).toBeTruthy()
})


