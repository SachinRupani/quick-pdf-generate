import { AppStrings } from "@/app/config/AppStrings";

export const useCreateNoteComponentStrings = () => {
  const { fields } = AppStrings.notes;
  const { preview, downloadPdf } = AppStrings.actions;
  const { success, error } = AppStrings.toast;

  return {
    titleLabel: fields.title.label,
    titlePlaceholder: fields.title.placeholder,
    descriptionLabel: fields.description.label,
    descriptionPlaceholder: fields.description.placeholder,
    actionPreview: preview,
    actionDownloadPdf: downloadPdf,
    successPdfTitle: success.successPdfTitle,
    successPdfDescription: success.successPdfDownloadingMsg,
    errorPdfTitle: error.errorPdfTitle,
    errorPdfDescription: error.errorPdfDescription,
  };
};
