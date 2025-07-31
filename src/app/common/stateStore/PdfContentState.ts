import { create } from "zustand";
import {
  defaultPdfContent,
  PdfContentEntity,
} from "../dataEntity/PdfContentEntity";

interface PdfContentEntityState {
  pdfContentEntity: PdfContentEntity;
  updatePdfContentEntity: (pdfContent: PdfContentEntity) => void;
}

const usePdfContentState = create<PdfContentEntityState>()((set) => ({
  pdfContentEntity: defaultPdfContent,
  // Function to update the pdf content entity
  updatePdfContentEntity: (newPdfContent: PdfContentEntity) =>
    set({ pdfContentEntity: newPdfContent }),
}));

export { usePdfContentState };
