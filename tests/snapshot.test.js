import TestRenderer from 'react-test-renderer'; // ES6
import { Main } from '../src/index';

it("snap shot test", async () => {
    //create a render of the SelectTimeSeries componen

    const AppRenderer = TestRenderer.create(
        <Main />
    );
    //spy on the fetchData method as it is important to the  SelectTimeSeries component
    // const spy = jest.spyOn(utils, 'fetchData');


    //get the json extract so we can perform snapshots and actions
    let STSJson = AppRenderer.toJSON();


    //create snapshot here
    expect(STSJson).toMatchSnapshot();




})



