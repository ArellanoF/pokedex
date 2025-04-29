import styled from 'styled-components';



// Componentes estilizados
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  background: linear-gradient(90deg, #ff1a1a 0%, #3366ff 100%);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
`;

const PokeBallIcon = styled.div`
  margin-right: 10px;
  width: 24px;
  height: 24px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 24px;
    height: 12px;
    top: 0;
    background-color: #ff1a1a;
    border-radius: 12px 12px 0 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 12px;
    bottom: 0;
    background-color: white;
    border-radius: 0 0 12px 12px;
  }
  
  & span {
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 2px solid black;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &:focus {
    outline: none;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.2s;
  
  &:focus {
    border-color: #3366ff;
    box-shadow: 0 0 0 2px rgba(51, 102, 255, 0.2);
    outline: none;
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 8px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
  }
`;

const CancelButton = styled(Button)`
  background: transparent;
  border: 1px solid #ddd;
  color: #666;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SaveButton = styled(Button)`
  background: linear-gradient(90deg, #ff1a1a 0%, #3366ff 100%);
  border: none;
  color: white;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Componente del Modal
const PokemonModal = ({ showAddModal, setShowAddModal, formData, handleInputChange, handleSubmit }: any) => {
  return (
    <>
      {showAddModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <Title>
                <PokeBallIcon><span></span></PokeBallIcon>
                Añadir Nuevo Pokémon
              </Title>
              <CloseButton onClick={() => setShowAddModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <ModalBody>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Nombre</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange}  
                    required 
                    placeholder="Pikachu"
                  />
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input 
                      type="number" 
                      id="weight" 
                      name="weight" 
                      value={formData.weight} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="6.0"
                      step="0.1"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="height">Altura (m)</Label>
                    <Input 
                      type="number" 
                      id="height" 
                      name="height" 
                      value={formData.height}
                      onChange={handleInputChange} 
                      required 
                      placeholder="0.4"
                      step="0.1"
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <Label htmlFor="url">URL de la imagen</Label>
                  <Input 
                    type="url" 
                    id="url" 
                    name="url" 
                    value={formData.url} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="https://ejemplo.com/pikachu.png"
                  />
                </FormGroup>
                
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="number">Número</Label>
                    <Input 
                      type="number" 
                      id="number" 
                      name="number" 
                      value={formData.number} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="025"
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <Label htmlFor="health">Salud</Label>
                    <Input 
                      type="number" 
                      id="health" 
                      name="health" 
                      value={formData.health} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="100"
                    />
                  </FormGroup>
                </FormRow>
                
                <ButtonGroup>
                  <CancelButton type="button" onClick={() => setShowAddModal(false)}>
                    Cancelar
                  </CancelButton>
                  <SaveButton type="submit">
                    Guardar Pokémon
                  </SaveButton>
                </ButtonGroup>
              </Form>
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default PokemonModal;