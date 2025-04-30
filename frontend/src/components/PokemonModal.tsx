import {
    ModalOverlay,
    ModalContainer,
    ModalHeader,
    Title,
    PokeBallIcon,
    CloseButton,
    ModalBody,
    Form,
    FormRow,
    FormGroup,
    Label,
    Input,
    ButtonGroup,
    CancelButton,
    SaveButton,
} from './pokemonModal.style';
import { PokemonModalProps } from '../interfaces/pokemonInterface';

// Componente del Modal
const PokemonModal = ({
    showAddModal,
    setShowAddModal,
    formData,
    handleInputChange,
    handleSubmit,
}: PokemonModalProps) => {
    return (
        <>
            {showAddModal && (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <Title>
                                <PokeBallIcon>
                                    <span></span>
                                </PokeBallIcon>
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
                                    <CancelButton
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                    >
                                        Cancelar
                                    </CancelButton>
                                    <SaveButton type="submit">Guardar Pokémon</SaveButton>
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
