import { useEffect } from "react";

const ADP = () => {
  useEffect(() => {
    if (typeof window !== "undefined")
      (window as any).location =
        "https://docs.google.com/document/d/e/2PACX-1vTtSsS7WFVF0QfOTr5XmnPuR6jdRAvY6jms983ZjLGUkg11nsM23Vad3KtQPMi1RoOLiJCd7awkUcB7/pub";
  }, []);

  return null;
};

export default ADP;
