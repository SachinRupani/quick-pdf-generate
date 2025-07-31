"use client";

import { AppButton } from "@/app/_components/button/AppButton";
import { usePdfContentState } from "@/app/common/stateStore/PdfContentState";
import { PDFViewer } from "@react-pdf/renderer";
import { PdfNotesDocument } from "../notes/PdfNotesDocument";

export type PropsPdfPreview = {
  onClosePreview?: () => void;
};

export const PdfPreview = ({ onClosePreview }: PropsPdfPreview) => {
  const { pdfContentEntity } = usePdfContentState();

  const _renderCloseButton = () => {
    return (
      <AppButton
        title="Close Preview"
        size="md"
        buttonVariant="flat"
        buttonColor="secondary"
        extraClassName="me-2 mt-2 self-end"
        onClickAction={onClosePreview}
      />
    );
  };

  const _renderPdfNotesPreview = () => {
    return pdfContentEntity.pdfType === "Notes" && pdfContentEntity.notes ? (
      <PdfNotesDocument notes={pdfContentEntity.notes} />
    ) : (
      <></>
    );
  };

  return (
    <div className="flex flex-col gap-2 bg-white min-h-screen w-full">
      {/* Close Button */}
      {_renderCloseButton()}

      {/* PDF Viewer */}
      <PDFViewer className="flex flex-col flex-1">
        {_renderPdfNotesPreview()}
      </PDFViewer>
    </div>
  );
};
