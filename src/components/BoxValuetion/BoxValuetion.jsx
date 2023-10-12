import { useContext } from "react";
import { ContainerSection } from "./BoxValue";
import { AccounterContext } from "../../provider/context";


export const BoxValuetion = () => {
  const { listAccount } = useContext(AccounterContext)
  console.log(listAccount);
  const sumValueAccount = listAccount.reduce((acc ,account) => acc + Number(account.value), 0)

  return(
    <ContainerSection>
      <div>
        <h4>Valor Total:</h4>
        <span>{`R$${sumValueAccount}`}</span>
      </div>
      <span>O valor se refere ao saldo</span>
    </ContainerSection>
  )

};