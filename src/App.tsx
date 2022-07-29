import React, { useState } from "react";
import "./App.css";
import { SendMesSnackbar } from "./common/components/Snackbar/Snackbar";
import { FeedbackForm } from "./components/feedback-form/FeedbackForm";

export const App: React.FC = () => {
  const [status, setStatus] = useState<null | string>(null);

  return (
    <div className="App">
      <SendMesSnackbar status={status} setStatus={setStatus} />
      <FeedbackForm setStatus={setStatus} />
    </div>
  );
};

export default App;
