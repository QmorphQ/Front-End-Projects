import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { service } from "../../Service/Service";
import { configs } from "../../data/componentsConfig";



describe('Button component', () =>{
    it('Button renders as default', () => {
        render(<Button {...service.getConfig(configs, 'btn', 'default')}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    it('Button renders without props with default settings', () => {
        render(<Button />);
        expect(screen.queryByRole('button')).toBeInTheDocument();
    });
    it('Button renders as alert', () => {
        render(<Button {...service.getConfig(configs, 'btn', 'alert')}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText("Open first modal")).toBeInTheDocument();
    });
    it('Button renders as relax', () => {
        render(<Button {...service.getConfig(configs, 'btn', 'relax')}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByText("Open second modal")).toBeInTheDocument();
    });
    it('Button snapshot ', () => {
      const button = render(<Button />);
      expect(button).toMatchSnapshot();
    });
});