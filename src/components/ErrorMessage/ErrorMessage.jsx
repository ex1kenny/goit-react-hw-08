import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <>
      <div className={css.container}>
        <p className={css.p}>Upsss! something wrong!!</p>
      </div>
    </>
  );
}
