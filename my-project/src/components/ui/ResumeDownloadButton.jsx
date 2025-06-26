import { useReactToPrint } from "react-to-print";
import { useRef, useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import { Button } from "./button"; // from shadcn/ui or your own button

export default function ResumeDownloadButton() {
  const { resumeRef } = useContext(ResumeContext); // Ref to preview

  const handlePrint = useReactToPrint({
    content: () => resumeRef?.current,
    documentTitle: "resume",
  });

  return (
    <Button onClick={handlePrint}>
      Download Resume
    </Button>
  );
}
