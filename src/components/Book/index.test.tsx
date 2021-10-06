import React from "react";
import { render, screen } from "@testing-library/react";
import Book from ".";

const testBook = {
  cover: "image",
  title: "Чистый код",
  availability: true,
  id: "4546542124687845",
};

const setup = () => {
  const book = render(
    <Book
      cover={testBook.cover}
      title={testBook.title}
      availability={testBook.availability}
      id={testBook.id}
    />
  );

  const button = book.getByRole("button");
  const name = book.getByRole("heading");
  const cover = book.getByRole("img");

  return {
    button,
    name,
    cover,
    ...book,
  };
};

describe("Book", () => {
  test("render root element", () => {
    const book = setup();
    expect(book.getByRole("article")).toBeInTheDocument();
  });

  test("Book renders name", () => {
    const { name } = setup();
    expect(name).toBeInTheDocument();
  });

  test("Book renders cover", () => {
    const { cover } = setup();
    expect(cover).toBeInTheDocument();
  });

  test("Book renders with data", () => {
    const book = setup();
    expect(book).toMatchSnapshot();
  });

  test("Book renders button for copy name book", () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(screen.getByText(/Скопировать/i)).toBeInTheDocument();
  });
});
