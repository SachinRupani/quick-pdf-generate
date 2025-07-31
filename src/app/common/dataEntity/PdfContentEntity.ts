import {
  defaultNoteState,
  NoteState,
} from "@/app/notes/components/createNote/data/NoteState";
import { DocumentType } from "./DocumentType";

export interface PdfContentEntity {
  pdfType: DocumentType;
  notes?: NoteState;
}

export const defaultPdfContent: PdfContentEntity = {
  pdfType: DocumentType.Notes,
  notes: defaultNoteState,
};
