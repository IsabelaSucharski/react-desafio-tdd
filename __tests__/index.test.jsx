import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Mostrando página inicial", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ name: "binance" }, { name: "OKX" }]),
      })
    );
  });

  test("tem que rodar home", () => {
    render(<Home />);
  });

  test("buscar na api", async () => {
    render(<Home />);

    await screen.findByText("OKX");
  });

  test("realiar o filtro", async () => {
    render(<Home />);

    await screen.findByText("binance");
    await screen.findByText("OKX");

    const filter = screen.getByLabelText(/Filtrar por nome/i);
    fireEvent.change(filter, { target: { value: "binance" } });

    screen.getByText("binance");

    expect(screen.queryByText("OKX")).not.toBeInTheDocument();
  });
});
