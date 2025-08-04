export interface InvoiceCustomerInfo {
  customerName: string;
  customerMobile: string;
  customerAddress: string;
}

export const defaultInvoiceCustomerInfo: InvoiceCustomerInfo = {
  customerName: "",
  customerMobile: "",
  customerAddress: "",
};
