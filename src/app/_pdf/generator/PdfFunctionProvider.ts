import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";

export interface PdfFunctionProvider {
  // Generates a PDF Blob based on the provided content
  generateBlob: (pdfContent: PdfContentEntity) => Promise<Blob>;

  // Download the PDF file
  downloadPdf: (blob: Blob, pdfType: string) => void;
}
