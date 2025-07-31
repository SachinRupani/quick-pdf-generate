"use client";

import { showToast } from "@/app/_components/toast/AppToast";
import { PdfFunctionProvider } from "@/app/_pdf/generator/PdfFunctionProvider";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";
import { usePdfContentState } from "@/app/common/stateStore/PdfContentState";
import { useMobileDetection } from "@/app/utils/UtilHooks";
import { Button, Input, Textarea } from "@heroui/react";
import React from "react";
import { useCreateNoteComponentHook } from "./hooks/useCreateNoteComponentHook";

type PropsCreateNoteComponent = {
  pdfFunctionProvider: PdfFunctionProvider;
  onClickPreview?: () => void;
};

const CreateNoteComponent = ({
  pdfFunctionProvider,
  onClickPreview,
}: PropsCreateNoteComponent) => {
  const { isRunningOnMobileDevice } = useMobileDetection();

  // Global state for PDF content
  const { pdfContentEntity, updatePdfContentEntity } = usePdfContentState();

  // Associated actions and state
  const {
    noteState,
    shouldEnableButton,
    shouldDisplayPreviewButton,
    updateTitle,
    updateDescription,
  } = useCreateNoteComponentHook(
    isRunningOnMobileDevice,
    pdfContentEntity.notes
  );

  const _getUpdatedPdfContentEntity = () => {
    const newPdfContentEntity: PdfContentEntity = {
      pdfType: DocumentType.Notes,
      notes: noteState,
    };

    return newPdfContentEntity;
  };

  const _handleTitleChange = (newTitle: string) => {
    updateTitle(newTitle);
  };

  const _handleDescriptionChange = (newDescription: string) => {
    updateDescription(newDescription);
  };

  const _handlePdfDownloadAction = () => {
    const newPdfContentEntity = _getUpdatedPdfContentEntity();

    // State update
    updatePdfContentEntity(newPdfContentEntity);

    // Pdf generation
    pdfFunctionProvider
      .generateBlob(newPdfContentEntity)
      .then((blob) => {
        showToast("PDF generated", "Downloading PDF now...");
        pdfFunctionProvider.downloadPdf(blob, newPdfContentEntity.pdfType);
      })
      .catch((error) => {
        console.error("Error generating PDF blob:", error);
      });
  };

  const _handlePreviewAction = () => {
    const newPdfContentEntity = _getUpdatedPdfContentEntity();
    updatePdfContentEntity(newPdfContentEntity);
    onClickPreview?.();
  };

  const _renderButtons = () => {
    return (
      <div className="flex flex-row gap-4">
        {/* Preview Button */}
        {shouldDisplayPreviewButton && (
          <Button
            isDisabled={!shouldEnableButton}
            className="w-32 mt-2 bg-zinc-200 text-gray-900 font-semibold p-6"
            onPress={_handlePreviewAction}
          >
            Preview
          </Button>
        )}

        {/* Download PDF Button */}
        <Button
          isDisabled={!shouldEnableButton}
          className="w-32 mt-2 bg-black text-white font-semibold p-6"
          onPress={_handlePdfDownloadAction}
        >
          Download PDF
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-6 gap-4 sm:w-full md:w-3/4">
      {/* Title */}
      <Input
        isRequired
        value={noteState.title}
        size="lg"
        label="Title"
        radius="md"
        labelPlacement="outside-top"
        classNames={{
          label: "text-zinc-800 font-semibold text-large",
          input: "font-medium text-sm text-large",
        }}
        placeholder="Enter your notes title here..."
        onValueChange={_handleTitleChange}
      />

      {/* Description */}
      <Textarea
        isRequired
        value={noteState.description}
        size="lg"
        label="Description"
        labelPlacement="outside-top"
        radius="md"
        className="mt-1"
        classNames={{
          label: "text-zinc-700 font-semibold text-sm",
          inputWrapper: "py-3",
          input: "font-medium text-sm",
        }}
        placeholder="Enter your notes description here..."
        onValueChange={_handleDescriptionChange}
      />

      {/* Action Buttons */}
      {_renderButtons()}
    </div>
  );
};

export const CreateNoteComponentMemoized = React.memo(CreateNoteComponent);
