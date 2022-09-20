import { useState } from "react";
import Layout from "../components/Layout";
import NoteList from "../components/Note/NoteList/NoteList";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define function that will open the modal
  const handleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Define function that will close the modal

  return (
    <Layout handleOpen={handleOpen}>
      <NoteList isModalOpen={isModalOpen} />
    </Layout>
  );
}
