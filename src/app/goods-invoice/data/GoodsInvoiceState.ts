import { safelyConvertedString } from "@/app/utils/UtilFunctions";
import {
  defaultInvoiceCustomerInfo,
  InvoiceCustomerInfo,
} from "./InvoiceCustomerInfo";
import { InvoiceIdType } from "./InvoiceIdType";
import {
  defaultInvoiceVendorInfo,
  InvoiceVendorInfo,
} from "./InvoiceVendorInfo";
import { ItemInfo } from "./ItemInfo";

export interface GoodsInvoiceState {
  invoiceId: string;
  invoiceIdType: InvoiceIdType;
  dateString: string;
  vendorInfo: InvoiceVendorInfo;
  customerInfo: InvoiceCustomerInfo;
  items: Array<ItemInfo>;
}

export const defaultGoodsInvoiceState: GoodsInvoiceState = {
  invoiceId: "",
  dateString: new Date().toDateString(),
  invoiceIdType: InvoiceIdType.Automatic,
  vendorInfo: defaultInvoiceVendorInfo,
  customerInfo: defaultInvoiceCustomerInfo,
  items: [],
};

export const generateInvoiceId = (): string => {
  return safelyConvertedString(Date.now());
};
