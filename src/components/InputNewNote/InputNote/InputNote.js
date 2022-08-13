export default function InputNote() {
  return (
    <form>
      <label htmlFor="title">Input Title</label>
      <input id="title" type="text" />
      <label htmlFor="body">Input Body</label>
      <input id="body" type="text" />
      <label htmlFor="date">Set Date</label>
      <input id="date" type="date" />
      <button type="submit">Add note</button>
    </form>
  );
}
