import { useEffect, useState } from "react";
import { CapaBlock } from "./CapaView.styled";

export const CapaView = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }, []);
  return (
    <CapaBlock $visible={visible}>
      CapabiliesView
    </CapaBlock>
  );
}

