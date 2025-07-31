import { DocumentType } from "@/app/common/dataEntity/DocumentType";

export interface OptionEntity {
  title: string;
  description: string;
  documentType: DocumentType;
  isSelected: boolean;
}

export const defaultOptionsList: Array<OptionEntity> = [
  {
    title: "Notes",
    description: "A simple notes pdf containing title and description",
    documentType: DocumentType.Notes,
    isSelected: false,
  },
  {
    title: "Goods Invoice",
    description:
      "A simple invoice containing date of purchase, invoice id, product name, description and amount",
    documentType: DocumentType.GoodsInvoice,
    isSelected: false,
  },
  {
    title: "Fuel Invoice",
    description:
      "A simple fuel invoice containing date, invoice id, vendor name, fuel price per litre and total fuel amount",
    documentType: DocumentType.FuelInvoice,
    isSelected: false,
  },
];
