import styled from 'styled-components';

export const PokedexScreenWrapper = styled.main`
    background-image: url('/assets/images/bg.jpg');
    // height: 100vh;
    // border: 0;
    // margin: 0;
    background-size: contain;
    font-family: 'Roboto', sans-serif;

    .actions_container {
        position: absolute;
        right: 30px;
        top: 30px;

        img {
            width: 100px;
            height: 50px;
            transition: transform 0.2s ease;
            
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .title_section {
        padding: 30px 0;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h2 {
            font-family: 'pokemon', sans-serif;
            letter-spacing: 3px;
            font-size: 48px !important;
            color: #ffcb05;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            margin-bottom: 5px;
        }
        
        p {
            font-size: 18px;
            color: white;
            font-weight: 500;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }
    }

    .pokedex_container {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.9);
        width: 90%;
        max-width: 1400px;
        overflow-y: auto;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        
        /* Estilizando la barra de scroll */
        &::-webkit-scrollbar {
            width: 8px;
        }
        
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: #3c5aa6;
            border-radius: 10px;
        }
    }

    .loading_spinner {
        width: 100%;
        text-align: center;
        padding: 40px;
        font-size: 18px;
        color: #3c5aa6;
    }

    .error_message {
        width: 100%;
        text-align: center;
        padding: 20px;
        color: #d92b2b;
        font-weight: bold;
    }

    .empty_state {
        width: 100%;
        text-align: center;
        padding: 40px;
        font-size: 18px;
        color: #666;
    }

    .action_img {
        cursor: pointer;
    }

    .modal_overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal {
        background-color: #FFFFFF;
        z-index: 100;
        padding: 30px;
        width: 90%;
        max-width: 500px;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        input {
            width: calc(50% - 10px);
            height: 40px;
            border: none;
            border-radius: 5px;
            background-color: #f0f0f0;
            padding: 8px 12px;
            font-size: 14px;
            
            &:focus {
                outline: 2px solid #3c5aa6;
            }
        }
    }

    .close_modal {
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        font-size: 24px;
        color: #666;
        
        &:hover {
            color: #d92b2b;
        }
    }

    .btn_container {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0 5px;

        button {
            border: none;
            color: white;
            padding: 10px 20px;
            background-color: #3c5aa6;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s ease;
            
            &:hover {
                background-color: #2a4580;
            }
        }
    }
`;

export default PokedexScreenWrapper;
