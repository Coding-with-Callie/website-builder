import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Header from "../components/Header";

test("loads and displays greeting", async () => {
  render(<Header />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
});
