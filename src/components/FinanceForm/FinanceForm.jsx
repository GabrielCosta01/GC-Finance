import { useContext } from "react";
import { Box, ContainerInput, FormContainer, Input, Label, LabelSelect, Select, ContainerSelect, ButtonForm } from "./FinanceForm";
import { useForm } from 'react-hook-form'
import { AccounterContext } from "../../provider/context";

export const FinanceForm = () => {

  const {register, handleSubmit } = useForm()
  const onSubmit = data => addAccountList(data)
  
  const { listAccount, addAccountList } = useContext(AccounterContext) 

  console.log(listAccount);

  return(
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <ContainerInput>
          <Label htmlFor="" >Descrição</Label>
          <Input type="text"  {...register("description")} required placeholder="descreva aqui..."/>
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="" >Valor</Label>
          <Input type="text" {...register("value")} required placeholder="valor do item"/>
        </ContainerInput>
        <ContainerSelect>
          <LabelSelect htmlFor="" >Tipo de valor</LabelSelect>
          <Select defaultValue="entrada" {...register("type")}>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </Select>
        </ContainerSelect>
        <ButtonForm type="submit">Inserir Valor</ButtonForm>
      </Box>
    </FormContainer>
  )

};
