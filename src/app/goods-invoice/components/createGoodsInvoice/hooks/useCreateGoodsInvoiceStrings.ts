import { AppStrings } from "@/app/config/AppStrings";

export const useCreateGoodsInvoiceStrings = () => {
  const { fields } = AppStrings.goodsInvoice;

  return {
    dateLabel: fields.date.label,
    invoiceIdLabel: fields.invoiceId.label,
    invoiceIdPlaceholder: fields.invoiceId.placeholder,
    vendorDetailsTitle: fields.vendor.detailsTitle,
    vendorNameLabel: fields.vendor.vendorName.label,
    vendorNamePlaceholder: fields.vendor.vendorName.placeholder,
    vendorAddressLabel: fields.vendor.address.label,
    vendorAddresslaceholder: fields.vendor.address.placeholder,
    vendorOtherInfoLabel: fields.vendor.otherInfo.label,
    vendorOtherInfolaceholder: fields.vendor.otherInfo.placeholder,
    customerDetailsTitle: fields.customer.detailsTitle,
    customerNameLabel: fields.customer.customerName.label,
    customerNamePlaceholder: fields.customer.customerName.placeholder,
    customerMobileLabel: fields.customer.mobile.label,
    customerMobilePlaceholder: fields.customer.mobile.placeholder,
    customerAddressLabel: fields.customer.address.label,
    customerAddressPlaceholder: fields.customer.address.placeholder,
  };
};
