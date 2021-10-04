import React from "react";
import LazyImage from "../helpers/LazyImage";

const Book = (props: any) => {
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
            alt: `Обложка книги ${props.title}`,
            src: props.cover,
            height: 237,
          }}
        />
      </div>
      <h2 className="book-card__name">{props.title}</h2>
      <span
        className={`book-card__availability ${
          props.availability ? "book-card__availability--yes" : ""
        }`}
      >
        {props.availability ? "Доступна" : "Занята"}
      </span>
      <button
        className="book-card__copy"
        type="button"
        onClick={(event) => {
          copySign(props.title, event);
        }}
      >
        Скопировать название
      </button>
    </article>
  );
};

export default Book;
