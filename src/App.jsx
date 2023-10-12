import { useContext } from "react";
import { Box, ContainerMain } from "./App.js";
import { BoxValuetion } from "./components/BoxValuetion/BoxValuetion.jsx";
import { FinanceForm } from "./components/FinanceForm/FinanceForm.jsx"
import { FinanceList } from "./components/FinanceList/FinanceList.jsx";
import { Header } from "./components/Header/Header.jsx"
import { AccounterContext } from "./provider/context.jsx";

const App = () => {
  const { listAccount } = useContext(AccounterContext)

  return (
    <>
    < Header />
    <ContainerMain>

      <Box>
        <FinanceForm />
        {listAccount.length > 0 ? <BoxValuetion /> : null} 
      </Box>

      <FinanceList />

    </ContainerMain>
    </>
  )
}
export default App;