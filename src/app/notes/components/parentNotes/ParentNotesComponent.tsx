"use client";

import { pdfFunctionProviderImpl } from "@/app/_pdf/generator/PdfFunctionProviderImpl";
import { PdfPreview } from "@/app/_pdf/preview/PdfPreview";
import { AppPageContainerMemoized } from "@/app/common/components/appPageContainer/AppPageContainer";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { CreateNoteComponentMemoized } from "../createNote/CreateNoteComponent";
import { useParentNotesHook } from "./hooks/useParentNotesHook";

export const ParentNotesComponent = () => {
  const { shouldDisplayPreview, displayPreview, hidePreview } =
    useParentNotesHook();

  const _renderCreateNoteComponent = () => {
    return (
      <AppPageContainerMemoized pageTitle={DocumentType.Notes.valueOf()}>
        <CreateNoteComponentMemoized
          pdfFunctionProvider={pdfFunctionProviderImpl}
          onClickPreview={displayPreview}
        />
      </AppPageContainerMemoized>
    );
  };

  const _renderPdfNotesPreviewComponent = () => {
    return (
      <div className="flex flex-col flex-1">
        <PdfPreview onClosePreview={hidePreview} />
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      {!shouldDisplayPreview && _renderCreateNoteComponent()}
      {shouldDisplayPreview && _renderPdfNotesPreviewComponent()}
    </div>
  );
};
