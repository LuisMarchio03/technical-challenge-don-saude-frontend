import { AssociatesTitleContainer, ButtonAddNewAssociate, ContentAssociatesList, HeaderAssociatesList, Input, InputSearch, MainAssociatesList, TableAssociates, TableLimit, Pagination, Tbody, Td, Th, Thead, Title, Tr, TFooter, Actions, ModalOverlay, Modal, ModalTitle, ButtonConfirm, ButtonCancel, ButtonsContainer } from "./styles"

import plusCircle from "../../assets/icons/associates/PlusCircle.png"
import searchIcon from "../../assets/icons/associates/InputField.svg"
import arrowLeft from "../../assets/icons/associates/arrow-left.svg"
import arrowRight from "../../assets/icons/associates/arrow-right.svg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { cpfOrCnpj } from "../../utils/masks/formatCnpjCpf"
import { formatCellphone } from "../../utils/masks/formatCellphone"

interface Associate {
  id: string
  name: string
  email: string
  cnpj: string
  phone: string
  cellphone: string
  responsible_clinic: string
  responsible_finance: string
  category: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export function Associates() {
  const [associatesList, setAssociatesList] = useState([])
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [idDelete, setIdDelete] = useState("")
  const [search, setSearch] = useState("")

  function handleSearch(e: any) {
    setSearch(e.target.value)
  }

  async function loadAssociates() {
    const response = await api.get("/list/associates")
    setAssociatesList(response.data)
  }

  async function handleOpenModalDelete() {
    setOpenModalDelete(true)
  }

  async function handleDelete() {
    try {
      await api.delete(`/associate/delete/${idDelete}`)
      loadAssociates()

      setIdDelete("")
      setOpenModalDelete(false)
    } catch (err) {
      setIdDelete("")
    }
  }

  useEffect(() => {
    loadAssociates()
  }, [])

  const selectCount = associatesList?.length;
  const totalCount = associatesList?.length;
  
  return (
    <>
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
              {associatesList?.map((associate: Associate) => (
                <Tr>
                  <Td>{associate?.id}</Td>
                  <Td className="name_associate">
                    <p>{associate?.name}</p>
                    <span>{cpfOrCnpj(associate?.cnpj)} | Titular</span>
                  </Td>
                  <Td>
                    {
                      formatCellphone(associate?.phone)
                    }
                  </Td>
                  <Td>
                    XXXXXXX
                  </Td>
                  <Td>
                    <Actions>
                      <span className="edit">Editar</span>
                      <span className="delete" onClick={() => {
                        handleOpenModalDelete()
                        setIdDelete(associate?.id)
                      }}>Deletar</span>
                    </Actions>
                  </Td>
                </Tr>
              ))}

            </Tbody>

          
          </TableAssociates>
          <TFooter>
            <TableLimit>
              Mostrando 
                <select
                  defaultValue={selectCount}
                >
                  <option value={selectCount}>{selectCount}</option>
                  <option value={2}>2</option>
                  <option value={5}>5</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
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
    
      {openModalDelete ? (
        <>
          <ModalOverlay>
            <Modal>
              <ModalTitle>Deletar Parceiro</ModalTitle>
              <ButtonsContainer>
                <ButtonCancel onClick={() => setOpenModalDelete(false)}>Cancelar</ButtonCancel>
                <ButtonConfirm onClick={() => handleDelete()}>Deletar</ButtonConfirm>
              </ButtonsContainer>
            </Modal>
          </ModalOverlay>
        </>
      ) : (
        <></>
      )}
    </>
  )
}