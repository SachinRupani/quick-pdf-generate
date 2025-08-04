"use client";

import { AppSwitchMemoized } from "@/app/common/components/appSwitch/AppSwitch";
import { AppTextInputMemoized } from "@/app/common/components/appTextInput/AppTextInput";
import { AppTextInputModeType } from "@/app/common/components/appTextInput/AppTextInputModeType";
import { LimitsConfig } from "@/app/config/MainAppConfig";
import { InvoiceIdType } from "../../data/InvoiceIdType";
import { useCreateGoodsInvoiceHook } from "./hooks/useCreateGoodsInvoiceHook";
import { useCreateGoodsInvoiceStrings } from "./hooks/useCreateGoodsInvoiceStrings";

export const CreateGoodsInvoice = () => {
  // Strings
  const {
    dateLabel,
    invoiceIdLabel,
    invoiceIdPlaceholder,
    vendorDetailsTitle,
    vendorNameLabel,
    vendorNamePlaceholder,
    vendorAddressLabel,
    vendorAddresslaceholder,
    vendorOtherInfoLabel,
    vendorOtherInfolaceholder,
    customerDetailsTitle,
    customerNameLabel,
    customerNamePlaceholder,
    customerMobileLabel,
    customerMobilePlaceholder,
    customerAddressLabel,
    customerAddressPlaceholder,
  } = useCreateGoodsInvoiceStrings();

  // Functions and state
  const {
    goodsInvoiceState,
    isAutomaticInvoiceId,
    updateInvoiceId,
    updateInvoiceIdType,
    updateVendorInfo,
    updateCustomerInfo,
  } = useCreateGoodsInvoiceHook();

  const _handleInvoiceIdUpdate = (newInvoiceId: string) => {
    updateInvoiceId(InvoiceIdType.Manual, newInvoiceId);
  };

  const _handleInvoiceIdSwitchToggle = (newSelectedState: boolean) => {
    updateInvoiceIdType(newSelectedState);
  };

  const _handleVendorNameUpdate = (newVendorName: string) => {
    updateVendorInfo(newVendorName, "name");
  };

  const _handleVendorAddressUpdate = (newVendorAddress: string) => {
    updateVendorInfo(newVendorAddress, "address");
  };

  const _handleVendorOtherInfoUpdate = (newOtherInfo: string) => {
    updateVendorInfo(newOtherInfo, "otherInfo");
  };

  const _handleCustomerNameUpdate = (newValue: string) => {
    updateCustomerInfo(newValue, "name");
  };

  const _handleCustomerMobileUpdate = (newValue: string) => {
    updateCustomerInfo(newValue, "mobile");
  };

  const _handleCustomerAddressUpdate = (newValue: string) => {
    updateCustomerInfo(newValue, "address");
  };

  const _renderDetailsHeader = (strDetailsTitle: string) => {
    return (
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-primary-700">{strDetailsTitle}</p>
        <div className="h-[1] bg-primary" />
      </div>
    );
  };

  const _renderDate = () => {
    return (
      <AppTextInputMemoized
        isReadOnly={true}
        inputMode={AppTextInputModeType.TextInput}
        isMandatoryInput={true}
        boxSize="md"
        inputlabel={dateLabel}
        colorVariant="primary"
        textValue={goodsInvoiceState.dateString}
        handleTextChangeAction={_handleInvoiceIdUpdate}
      />
    );
  };

  const _renderInvoiceId = () => {
    return (
      <div className="flex flex-row gap-4 items-end">
        <AppTextInputMemoized
          isReadOnly={
            goodsInvoiceState.invoiceIdType === InvoiceIdType.Automatic
          }
          inputMode={AppTextInputModeType.TextInput}
          isMandatoryInput={true}
          boxSize="md"
          inputlabel={invoiceIdLabel}
          placeholderText={invoiceIdPlaceholder}
          colorVariant="primary"
          textValue={goodsInvoiceState.invoiceId}
          handleTextChangeAction={_handleInvoiceIdUpdate}
        />

        <div className="mb-2">
          {/* Is Automatic */}
          <AppSwitchMemoized
            isOn={isAutomaticInvoiceId()}
            title={goodsInvoiceState.invoiceIdType.valueOf()}
            onToggleAction={_handleInvoiceIdSwitchToggle}
          />
        </div>
      </div>
    );
  };

  const _renderVendorDetails = () => {
    return (
      <div className="flex flex-col gap-3">
        {/* Details heading */}
        {_renderDetailsHeader(vendorDetailsTitle)}

        <div className="grid grid-cols-1 gap-3">
          {/* Vendor Name */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={true}
            boxSize="md"
            inputlabel={vendorNameLabel}
            colorVariant="primary"
            placeholderText={vendorNamePlaceholder}
            textValue={goodsInvoiceState.vendorInfo.vendorName}
            handleTextChangeAction={_handleVendorNameUpdate}
          />

          {/* Vendor Address */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={false}
            boxSize="md"
            inputlabel={vendorAddressLabel}
            colorVariant="primary"
            placeholderText={vendorAddresslaceholder}
            textValue={goodsInvoiceState.vendorInfo.vendorAddress}
            handleTextChangeAction={_handleVendorAddressUpdate}
          />

          {/* Vendor Other Info */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={false}
            boxSize="md"
            inputlabel={vendorOtherInfoLabel}
            colorVariant="primary"
            placeholderText={vendorOtherInfolaceholder}
            textValue={goodsInvoiceState.vendorInfo.vendorOtherInfo}
            handleTextChangeAction={_handleVendorOtherInfoUpdate}
          />
        </div>
      </div>
    );
  };

  const _renderCustomerDetails = () => {
    return (
      <div className="flex flex-col gap-3">
        {/* Details heading */}
        {_renderDetailsHeader(customerDetailsTitle)}

        <div className="grid grid-cols-1 gap-3">
          {/* Customer Name */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={true}
            boxSize="md"
            inputlabel={customerNameLabel}
            colorVariant="primary"
            placeholderText={customerNamePlaceholder}
            textValue={goodsInvoiceState.customerInfo.customerName}
            handleTextChangeAction={_handleCustomerNameUpdate}
          />

          {/* Customer Mobile */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={true}
            boxSize="md"
            inputlabel={customerMobileLabel}
            colorVariant="primary"
            placeholderText={customerMobilePlaceholder}
            maxLength={LimitsConfig.CharacterLimits.mobileInput}
            textValue={goodsInvoiceState.customerInfo.customerMobile}
            handleTextChangeAction={_handleCustomerMobileUpdate}
          />

          {/* Customer Address */}
          <AppTextInputMemoized
            inputMode={AppTextInputModeType.TextInput}
            isMandatoryInput={false}
            boxSize="md"
            inputlabel={customerAddressLabel}
            colorVariant="primary"
            placeholderText={customerAddressPlaceholder}
            textValue={goodsInvoiceState.customerInfo.customerAddress}
            handleTextChangeAction={_handleCustomerAddressUpdate}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {_renderDate()}
      {_renderInvoiceId()}
      {_renderVendorDetails()}
      {_renderCustomerDetails()}
    </div>
  );
};
