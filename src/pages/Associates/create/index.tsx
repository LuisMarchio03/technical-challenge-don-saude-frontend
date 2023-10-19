import { AssociatesTitleContainer, Title } from "../styles";
import { InputContainer, Label, Input, Select, Option } from "../../../components/Input";
import { 
  CreateAssociateFormContainer,
  CreateAssociateForm, 
  MainCreateAssociate, 
  FormButtonsContainer, 
  ButtonCancel, 
  ButtonNext
} from "./styles";

import arrowLeft from "../../../assets/icons/associates/arrow-left.svg";
import { Link } from "react-router-dom";

export function CreateAssociate() {

  return (
    <MainCreateAssociate>
      <AssociatesTitleContainer>
        <Title>
          <Link to="/">
            <img
              src={arrowLeft}
              alt="Arrow Left"
              />
            Novo Parceiro
          </Link>
        </Title>
      </AssociatesTitleContainer>
      
      <CreateAssociateFormContainer>
        <CreateAssociateForm>
            <InputContainer>
              <Label>Categoria</Label> 
              <Select>
                <Option>Teste 01</Option>
                <Option>Teste 02</Option>
                <Option>Teste 03</Option>
              </Select>
            </InputContainer>

            <InputContainer>
              <Label>CNPJ</Label>
              <Input 
                placeholder="Digite o CNPJ"
                type="text"
                name="cnpj"
                id="cnpj"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Nome</Label>
              <Input 
                placeholder="Digite o nome"
                type="text"
                name="name"
                id="name"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>E-mail</Label>
              <Input 
                placeholder="Digite o email"
                type="email"
                name="email"
                id="email"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Telefone</Label>
              <Input 
                placeholder="Digite o telefone"
                type="text"
                name="phone"
                id="phone"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Celular</Label>
              <Input 
                placeholder="Digite o celular"
                type="text"
                name="cnpj"
                id="cnpj"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Responsável Clínico</Label>
              <Input 
                placeholder="Digite o responsável clínico"
                type="text"
                name="responsible_clinic"
                id="responsible_clinic"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Responsável Financeiro</Label>
              <Input 
                placeholder="Digite o responsável financeiro"
                type="text"
                name="responsible_finance"
                id="responsible_finance"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Senha</Label>
              <Input 
                placeholder="Digite o senha"
                type="password"
                name="password"
                id="password"
                required
              />
            </InputContainer>

            <InputContainer>
              <Label>Confirme a senha</Label>
              <Input 
                placeholder="Digite a senha novamente"
                type="password"
                name="password_match"
                id="password_match"
                required
              />
            </InputContainer>

            <FormButtonsContainer>
              <ButtonCancel>
                cancelar
              </ButtonCancel>

              <ButtonNext>
                Próxima
              </ButtonNext>
            </FormButtonsContainer>
        </CreateAssociateForm>
      </CreateAssociateFormContainer>
    </MainCreateAssociate>
  )
}