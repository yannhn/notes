export default function NoteItem({ title, body, date }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{body}</p>
      <span>{date}</span>
    </section>
  );
}
