"use client";
import React, { useState, useEffect } from "react";

const Dialog: React.FC = () => {
  const [showDialog, setShowDialog] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDialog(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showDialog && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            borderRadius: "5px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Este é um diálogo simples que desaparecerá em 5 segundos.
        </div>
      )}
    </div>
  );
};

export default Dialog;
