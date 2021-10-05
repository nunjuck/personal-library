import React from "react";
import { render, screen } from "@testing-library/react";
import Book from ".";

const testBook = {
  cover: "image",
  title: "Чистый код",
  availability: true,
  id: "4546542124687845",
};

describe("Book", () => {
  render(
    <Book
      cover={testBook.cover}
      title={testBook.title}
      availability={testBook.availability}
      id={testBook.id}
    />
  );

  it("render button for copy name book", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeEnabled();
    expect(screen.getByText(/Скопировать/i)).toBeInTheDocument();
  });
});
