import { AppPageContainerMemoized } from "../common/components/appPageContainer/AppPageContainer";
import { DocumentType } from "../common/dataEntity/DocumentType";
import { CreateGoodsInvoice } from "./components/createGoodsInvoice/CreateGoodsInvoice";

export default function GoodsInvoice() {
  return (
    <AppPageContainerMemoized pageTitle={DocumentType.GoodsInvoice.valueOf()}>
      <CreateGoodsInvoice />
    </AppPageContainerMemoized>
  );
}
