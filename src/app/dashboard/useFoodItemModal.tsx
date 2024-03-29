// useModal.tsx

import { useState } from "react";

function useFoodItemModalModal() {
  const [isOpen, setisOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  const toggleEdit = () => {
    setEdit(!edit);
    console.log("edit set to: " + edit);
  };
  return {
    isOpen,
    toggle,
    toggleEdit,
    edit,
  };
}

export default useFoodItemModalModal;
