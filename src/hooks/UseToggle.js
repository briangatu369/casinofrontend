import { useState } from "react";

const useToggle = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return { showModal, toggleModal };
};

export default useToggle;
