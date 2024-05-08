import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Page }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("allowed"))) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Page />
    </div>
  );
}

export default Protected;
