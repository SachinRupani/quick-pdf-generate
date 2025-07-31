"use client";

import { StyleSheet } from "@react-pdf/renderer";

// Create styles
export const pdfNotesDocumentStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 24,
  },

  viewContainer: {
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 8,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#121212",
  },

  descriptionStyle: {
    fontSize: 14,
    marginBottom: 16,
    color: "#525252",
  },
});
