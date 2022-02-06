import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { service } from "../../Service/Service";
import { configs } from "../../data/componentsConfig";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';


describe('Modal component', () =>{
    const initialState = {modalWindow:{modalIsActive: 1},};
    const productsConfigs = service.getConfig(configs, "modal" ,"add-card-to-cart");
    const cartConfigs = service.getConfig(configs, "modal" ,"remove-card");
    const mockStore = configureStore()
    let store;
    it('Modal renders without props with default settings', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><Modal /></Provider>);
        expect(screen.getByText("Test 'Body'")).toBeInTheDocument();
    });
    it('Modal renders with add-card-to-cart settings', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><Modal {...productsConfigs}/></Provider>);
        expect(screen.getByText("Do you want to add this product?")).toBeInTheDocument();
    });
    it('Modal with remove-card settings', () => {
        store = mockStore(initialState);
        render(<Provider store={store}><Modal {...cartConfigs}/></Provider>);
        expect(screen.getByText("Do you want to remove this product?")).toBeInTheDocument();
    });
    it('Modal snapshot ', () => {
        store = mockStore(initialState);
        const modal = render(<Provider store={store}><Modal /></Provider>);
        expect(modal).toMatchSnapshot();
      })
});