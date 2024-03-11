import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  error: string;
};

const ErrorMessage = ({ error }: Props) => {
  return (
    <Alert variant="destructive">
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle>Erro!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  );
};

export default ErrorMessage;
