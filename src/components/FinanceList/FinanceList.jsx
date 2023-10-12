import { useContext } from "react"
import { AccounterContext } from "../../provider/context"
import { Container, ListAccounts, CardAccount } from "./FinanceList"

export const FinanceList = () => {
  const { listAccount, removeAccountList } = useContext(AccounterContext)
  return(
    <Container>
      <h2>Resumo Financeiro</h2>
      <ListAccounts>
        {listAccount.length > 0 ?
          listAccount.map((item, i) => (
            <CardAccount key={i} type={item.type}>
              <h4>{item.description}</h4>
              <span>{item.type}</span>
              <span>{item.value}</span>
              <button onClick={() => removeAccountList(item)}>Excluir</button>
            </CardAccount>
          ))
          : 
          <h2>Você ainda não possui nenhum lançamento</h2>
        }
      </ListAccounts>
    </Container>
  )
}