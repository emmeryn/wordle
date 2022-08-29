import { render, screen } from "@testing-library/react";
import React from "react";
import { StatCell } from "./StatCell";

test('renders provided title and value', () => {
  const title = 'title';
  const value = 'val';
  render(<StatCell title={title} value={value}/>);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
  const valueElement = screen.getByText(value);
  expect(valueElement).toBeInTheDocument();
});