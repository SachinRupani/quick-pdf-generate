"use client";

import { NoteState } from "@/app/notes/components/createNote/data/NoteState";
import { Document, Font, Page, Text, View } from "@react-pdf/renderer";
import { pdfNotesDocumentStyles } from "./PdfNotesDocument.styles";

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

export type PropsPdfNotesDocument = {
  notes: NoteState;
};

/**
 * PdfNotesDocument component renders a PDF document with the provided title and description.
 * It uses React PDF to create a structured PDF layout.
 */
export const PdfNotesDocument = ({ notes }: PropsPdfNotesDocument) => {
  const styles = pdfNotesDocumentStyles;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={true}>
        <View style={styles.viewContainer}>
          <Text style={styles.titleStyle}>{notes.title}</Text>
          <Text style={styles.descriptionStyle}>{notes.description}</Text>
        </View>
      </Page>
    </Document>
  );
};
