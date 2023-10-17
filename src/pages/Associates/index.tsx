import { AssociatesTitleContainer, ButtonAddNewAssociate, ContentAssociatesList, HeaderAssociatesList, Input, InputSearch, MainAssociatesList, TableAssociates, TableLimit, Pagination, Tbody, Td, Th, Thead, Title, Tr, TFooter, Actions } from "./styles"

import plusCircle from "../../assets/icons/associates/PlusCircle.png"
import searchIcon from "../../assets/icons/associates/InputField.svg"
import arrowLeft from "../../assets/icons/associates/arrow-left.svg"
import arrowRight from "../../assets/icons/associates/arrow-right.svg"
import { Link } from "react-router-dom"

export function Associates() {
  const selectCount = 10;
  const totalCount = 100;
  
  return (
    <MainAssociatesList>
      <AssociatesTitleContainer>
        <Title>
          Parceiros
        </Title>

        <Link to="/associates/create">
          <ButtonAddNewAssociate>
            <img
              src={plusCircle}
              alt="Vector plus circle"
            /> Adicionar Parceiro
          </ButtonAddNewAssociate>
        </Link>

      </AssociatesTitleContainer>

      <ContentAssociatesList>
        <HeaderAssociatesList>
          <InputSearch htmlFor="search">
            <img
              src={searchIcon}
              alt="Search Icon"
            /> 
            <Input type="text" id="search" placeholder="Buscar parceiros" />
          </InputSearch>
          
        </HeaderAssociatesList>

        <TableAssociates>
          <Thead>
            <Tr>
              <Th scope="col">
                Organização
              </Th>
              <Th scope="col">
                Nome
              </Th>
              <Th scope="col">
                Telefones
              </Th>
              <Th scope="col">
                Código antigo
              </Th>
              <Th scope="col">
                Ações
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>XXXXXXX</Td>
              <Td className="name_associate">
                <p>Username Name</p>
                <span>XXX.XXX.XXX-XX | Titular</span>
              </Td>
              <Td>
                (XX) X XXXX-XXXX
              </Td>
              <Td>
                XXXXXXX
              </Td>
              <Td>
                <Actions>
                  <span className="edit">Editar</span>
                  <span className="delete">Deletar</span>
                </Actions>
              </Td>
            </Tr>
            <Tr>
              <Td>XXXXXXX</Td>
              <Td className="name_associate">
                <p>Username Name</p>
                <span>XXX.XXX.XXX-XX | Titular</span>
              </Td>
              <Td>
                (XX) X XXXX-XXXX
              </Td>
              <Td>
                XXXXXXX
              </Td>
              <Td>
                <Actions>
                  <span className="edit">Editar</span>
                  <span className="delete">Deletar</span>
                </Actions>
              </Td>
            </Tr>
            <Tr>
              <Td>XXXXXXX</Td>
              <Td className="name_associate">
                <p>Username Name</p>
                <span>XXX.XXX.XXX-XX | Titular</span>
              </Td>
              <Td>
                (XX) X XXXX-XXXX
              </Td>
              <Td>
                XXXXXXX
              </Td>
              <Td>
                <Actions>
                  <span className="edit">Editar</span>
                  <span className="delete">Deletar</span>
                </Actions>
              </Td>
            </Tr>
          </Tbody>

        
        </TableAssociates>
        <TFooter>
          <TableLimit>
            Mostrando 
              <select
                defaultValue={selectCount}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select> 
            de {totalCount} resultados
          </TableLimit>

          <Pagination>
            <img
              src={arrowLeft}
              alt="Arrow Left"
            />

            1

            <img
              src={arrowRight}
              alt="Arrow Right"
            />
          </Pagination>
        </TFooter>
      </ContentAssociatesList>
    </MainAssociatesList>
  )
}