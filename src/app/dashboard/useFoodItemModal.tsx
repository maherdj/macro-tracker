// useModal.tsx

import { useState } from "react";

function useFoodItemModalModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle,
  };
}

export default useFoodItemModalModal;
