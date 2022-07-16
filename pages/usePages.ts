import { useState } from "react";

export default function usePages() {
  const [index, setIndex] = useState(1);

  return { index, setIndex };
}
