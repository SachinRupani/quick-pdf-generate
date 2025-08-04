export const AppStrings = {
  goodsInvoice: {
    fields: {
      date: {
        label: "Date",
        placeholder: "",
      },
      invoiceId: {
        label: "Invoice ID",
        placeholder: "Enter unique invoice id",
      },
      vendor: {
        detailsTitle: "Vendor Details",
        vendorName: {
          label: "Vendor Name",
          placeholder: "Enter name of the vendor/seller",
        },
        address: {
          label: "Vendor Address",
          placeholder: "Enter address of the vendor/seller",
        },
        otherInfo: {
          label: "Vendor Other Info",
          placeholder: "Enter other info of the vendor/seller",
        },
      },
      customer: {
        detailsTitle: "Customer Details",
        customerName: {
          label: "Customer Name",
          placeholder: "Enter name of the customer",
        },
        address: {
          label: "Customer Address",
          placeholder: "Enter address of the customer",
        },
        mobile: {
          label: "Customer Mobile",
          placeholder: "Enter mobile of the customer",
        },
      },
    },
  },
  notes: {
    fields: {
      title: {
        label: "Title",
        placeholder: "Enter your notes title here...",
      },
      description: {
        label: "Description",
        placeholder: "Enter your notes description here...",
      },
    },
  },
  actions: {
    preview: "Preview",
    downloadPdf: "Download PDF",
  },
  toast: {
    success: {
      successPdfTitle: "PDF generated!",
      successPdfDownloadingMsg: "Downloading PDF now...",
    },
    error: {
      errorPdfTitle: "Error!",
      errorPdfDescription: "Some error occurred while PDF generation",
    },
  },
};
