export interface InvoiceVendorInfo {
  vendorName: string;
  vendorAddress: string;
  vendorOtherInfo: string;
}

export const defaultInvoiceVendorInfo: InvoiceVendorInfo = {
  vendorName: "",
  vendorAddress: "",
  vendorOtherInfo: "",
};
