"use client";

import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";
import { pdf } from "@react-pdf/renderer";
import { PdfNotesDocument } from "../notes/PdfNotesDocument";
import { PdfFunctionProvider } from "./PdfFunctionProvider";

export const pdfFunctionProviderImpl: PdfFunctionProvider = {
  // Generate PDF Blob
  generateBlob: (pdfContent: PdfContentEntity): Promise<Blob> => {
    return new Promise(async (resolve, reject) => {
      let blob: Blob | null = null;
      switch (pdfContent.pdfType) {
        case DocumentType.Notes:
          blob = await pdf(
            <PdfNotesDocument notes={pdfContent.notes!} />
          ).toBlob();
        default:
          break;
      }

      // resolve with blob or reject with an error
      blob ? resolve(blob) : reject(new Error("Failed to generate PDF blob"));
    });
  },

  // Download PDF
  downloadPdf: (blob: Blob, pdfType: string) => {
    const currentTimestamp = Date.now();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${pdfType}-${currentTimestamp}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },
};
