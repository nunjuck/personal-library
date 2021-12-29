import React from "react";
import { BookType } from "../../types/book";
import LazyImage from "../helpers/LazyImage";

const Book = ({ cover, title, availability }: BookType) => {
  const copySign = (
    data: string,
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    const th = event.currentTarget;
    const name = th.innerText;
    navigator.clipboard
      .writeText(data)
      .then(() => {
        th.innerText = "Скопировано";
        setTimeout(() => {
          th.innerText = name;
        }, 2000);
      })
      .catch((error) => {
        console.error(
          "При копировании произошла ошибка. Обновите страницу или скопируйте вручную",
          error
        );
      });
  };

  return (
    <article className="book-card">
      <div className="book-card__cover">
        <LazyImage
          image={{
            alt: `Обложка книги ${title}`,
            src: cover,
            height: 237,
          }}
        />
      </div>
      <h2 className="book-card__name" title={title}>
        {title}
      </h2>
      <span
        className={`book-card__availability ${
          availability ? "book-card__availability--yes" : ""
        }`}
      >
        {availability ? "Доступна" : "Занята"}
      </span>
      <button
        className="book-card__copy"
        type="button"
        onClick={(event) => {
          copySign(title, event);
        }}
      >
        Скопировать название
      </button>
    </article>
  );
};

export default Book;
