// src/utils/exportUtils.js
import html2pdf from "html2pdf.js";

export const exportToPDF = (element, filename) => {
  const opt = {
    margin:       0.3,
    filename:     filename,
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
};
