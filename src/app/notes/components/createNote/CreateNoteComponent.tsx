"use client";

import { PdfFunctionProvider } from "@/app/_pdf/generator/PdfFunctionProvider";
import { AppTextInputMemoized } from "@/app/common/components/appTextInput/AppTextInput";
import { AppTextInputModeType } from "@/app/common/components/appTextInput/AppTextInputModeType";
import { AppButton } from "@/app/common/components/button/AppButton";
import {
  showErrorToast,
  showSuccessToast,
} from "@/app/common/components/toast/AppToast";
import { DocumentType } from "@/app/common/dataEntity/DocumentType";
import { PdfContentEntity } from "@/app/common/dataEntity/PdfContentEntity";
import { usePdfContentState } from "@/app/common/stateStore/PdfContentState";
import { useMobileDetection } from "@/app/utils/UtilHooks";
import React from "react";
import { useCreateNoteComponentHook } from "./hooks/useCreateNoteComponentHook";
import { useCreateNoteComponentStrings } from "./hooks/useCreateNoteComponentStrings";

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

  // Strings
  const {
    titleLabel,
    titlePlaceholder,
    descriptionLabel,
    descriptionPlaceholder,
    actionPreview,
    actionDownloadPdf,
    successPdfTitle,
    errorPdfDescription,
    errorPdfTitle,
    successPdfDescription,
  } = useCreateNoteComponentStrings();

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
        showSuccessToast(successPdfTitle, successPdfDescription);
        pdfFunctionProvider.downloadPdf(blob, newPdfContentEntity.pdfType);
      })
      .catch((error) => {
        console.error("Error generating PDF blob:", error);
        showErrorToast(errorPdfTitle, errorPdfDescription);
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
            title={actionPreview}
            shouldBeDisabled={!shouldEnableButton}
            buttonColor="primary"
            buttonVariant="flat"
            size="lg"
            onClickAction={_handlePreviewAction}
          />
        )}

        {/* Download PDF Button */}
        <AppButton
          title={actionDownloadPdf}
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
    <>
      {/* Title */}
      <AppTextInputMemoized
        inputMode={AppTextInputModeType.TextInput}
        isMandatoryInput={true}
        boxSize="lg"
        boxRadius="md"
        colorVariant="primary"
        extraLabelClassName="text-large"
        extraInputClassName="text-large"
        inputlabel={titleLabel}
        placeholderText={titlePlaceholder}
        textValue={noteState.title}
        handleTextChangeAction={_handleTitleChange}
      />

      {/* Description */}
      <AppTextInputMemoized
        inputMode={AppTextInputModeType.TextArea}
        isMandatoryInput={true}
        boxSize="lg"
        extraContainerClassName="mt-1"
        colorVariant="primary"
        inputlabel={descriptionLabel}
        placeholderText={descriptionPlaceholder}
        textValue={noteState.description}
        handleTextChangeAction={_handleDescriptionChange}
      />

      {/* Action Buttons */}
      {_renderButtons()}
    </>
  );
};

export const CreateNoteComponentMemoized = React.memo(CreateNoteComponent);
