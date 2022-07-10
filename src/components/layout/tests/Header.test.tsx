import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { BrowserRouter as Router } from "react-router-dom"

test(`Initial conditions`, () => {
    render(<Header />);

    const pageTitle = screen.getByRole("heading", { name: /Exame Final de Frontend IV/i });
    expect(pageTitle).toHaveTextContent("Exame Final de Frontend IV");

    const link = screen.getByRole("listitem", { name: /Inicio/i });
    expect(link).toHaveTextContent("Inicio");

    /* const { getByText } = render(<Header />, { wrapper: Router });
    fireEvent.click(getByText("Inicio"));
    expect(getByText("Catalogo")).toBeInTheDocument(); */
})