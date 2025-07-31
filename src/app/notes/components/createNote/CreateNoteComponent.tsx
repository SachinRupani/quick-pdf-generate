"use client";

import { AppButton } from "@/app/_components/button/AppButton";
import { showToast } from "@/app/_components/toast/AppToast";
import { PdfFunctionProvider } from "@/app/_pdf/generator/PdfFunctionProvider";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";
import { usePdfContentState } from "@/app/common/stateStore/PdfContentState";
import { useMobileDetection } from "@/app/utils/UtilHooks";
import { Input, Textarea } from "@heroui/react";
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
      <div className="flex flex-row gap-4 mt-2">
        {/* Preview Button */}
        {shouldDisplayPreviewButton && (
          <AppButton
            title="Preview"
            shouldBeDisabled={!shouldEnableButton}
            buttonColor="primary"
            buttonVariant="flat"
            size="lg"
            onClickAction={_handlePreviewAction}
          />
        )}

        {/* Download PDF Button */}
        <AppButton
          title="Download PDF"
          shouldBeDisabled={!shouldEnableButton}
          buttonColor="primary"
          buttonVariant="solid"
          size="lg"
          onClickAction={_handlePdfDownloadAction}
        />
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
        color="primary"
        classNames={{
          label: "text-primary-700 font-semibold text-large",
          input: "font-medium text-large text-primary-800",
          inputWrapper: "bg-primary-50",
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
        color="primary"
        classNames={{
          label: "text-primary-700 font-semibold text-sm",
          input: "font-medium text-sm text-primary-800",
          inputWrapper: "py-3 bg-primary-50",
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
