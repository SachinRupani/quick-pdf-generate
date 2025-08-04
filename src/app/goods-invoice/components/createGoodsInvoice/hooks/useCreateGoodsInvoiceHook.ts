import {
  defaultGoodsInvoiceState,
  generateInvoiceId,
  GoodsInvoiceState,
} from "@/app/goods-invoice/data/GoodsInvoiceState";
import { InvoiceIdType } from "@/app/goods-invoice/data/InvoiceIdType";
import { safelyConvertedString } from "@/app/utils/UtilFunctions";
import { useEffect, useState } from "react";

export const useCreateGoodsInvoiceHook = () => {
  const [goodsInvoiceState, setGoodsInvoiceState] = useState<GoodsInvoiceState>(
    defaultGoodsInvoiceState
  );

  useEffect(() => {
    updateInvoiceId(InvoiceIdType.Automatic);
  }, []);

  const updateInvoiceId = (
    newInvoiceIdType: InvoiceIdType,
    newValue?: string
  ) => {
    setGoodsInvoiceState((prevState) => ({
      ...prevState,
      invoiceIdType: newInvoiceIdType,
      invoiceId:
        newInvoiceIdType === InvoiceIdType.Automatic
          ? generateInvoiceId()
          : safelyConvertedString(newValue),
    }));
  };

  const isAutomaticInvoiceId = (): boolean => {
    return goodsInvoiceState.invoiceIdType === InvoiceIdType.Automatic;
  };

  const updateInvoiceIdType = (isSelected: boolean) => {
    const newIdType = isSelected
      ? InvoiceIdType.Automatic
      : InvoiceIdType.Manual;
    updateInvoiceId(newIdType, goodsInvoiceState.invoiceId);
  };

  const updateVendorInfo = (
    newVendorInfoValue: string,
    vendorInfoType: "name" | "address" | "otherInfo"
  ) => {
    const { vendorInfo } = goodsInvoiceState;
    setGoodsInvoiceState((prevState) => ({
      ...prevState,
      vendorInfo: {
        vendorName:
          vendorInfoType === "name"
            ? newVendorInfoValue
            : vendorInfo.vendorName,
        vendorAddress:
          vendorInfoType === "address"
            ? newVendorInfoValue
            : vendorInfo.vendorAddress,
        vendorOtherInfo:
          vendorInfoType === "otherInfo"
            ? newVendorInfoValue
            : vendorInfo.vendorOtherInfo,
      },
    }));
  };

  const updateCustomerInfo = (
    newValueString: string,
    customerInfoType: "name" | "address" | "mobile"
  ) => {
    const { customerInfo } = goodsInvoiceState;
    setGoodsInvoiceState((prevState) => ({
      ...prevState,
      customerInfo: {
        customerName:
          customerInfoType === "name"
            ? newValueString
            : customerInfo.customerName,
        customerAddress:
          customerInfoType === "address"
            ? newValueString
            : customerInfo.customerAddress,
        customerMobile:
          customerInfoType === "mobile"
            ? newValueString
            : customerInfo.customerMobile,
      },
    }));
  };

  return {
    goodsInvoiceState,
    isAutomaticInvoiceId,
    updateInvoiceId,
    updateInvoiceIdType,
    updateVendorInfo,
    updateCustomerInfo,
  };
};
