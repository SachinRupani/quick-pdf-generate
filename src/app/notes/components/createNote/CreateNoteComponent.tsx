"use client";

import { AppTextInputMemoized } from "@/app/_components/appTextInput/AppTextInput";
import { AppTextInputModeType } from "@/app/_components/appTextInput/AppTextInputModeType";
import { AppButton } from "@/app/_components/button/AppButton";
import { showToast } from "@/app/_components/toast/AppToast";
import { PdfFunctionProvider } from "@/app/_pdf/generator/PdfFunctionProvider";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";
import { usePdfContentState } from "@/app/common/stateStore/PdfContentState";
import { useMobileDetection } from "@/app/utils/UtilHooks";
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
      <AppTextInputMemoized
        inputMode={AppTextInputModeType.TextInput}
        isMandatoryInput={true}
        boxSize="lg"
        boxRadius="md"
        colorVariant="primary"
        inputlabel="Title"
        placeholderText="Enter your notes title here..."
        extraLabelClassName="text-large"
        extraInputClassName="text-large"
        textValue={noteState.title}
        handleTextChangeAction={_handleTitleChange}
      />

      {/* Description */}
      <AppTextInputMemoized
        inputMode={AppTextInputModeType.TextArea}
        isMandatoryInput={true}
        boxSize="lg"
        inputlabel="Description"
        extraContainerClassName="mt-1"
        colorVariant="primary"
        placeholderText="Enter your notes description here..."
        textValue={noteState.description}
        handleTextChangeAction={_handleDescriptionChange}
      />

      {/* Action Buttons */}
      {_renderButtons()}
    </div>
  );
};

export const CreateNoteComponentMemoized = React.memo(CreateNoteComponent);
