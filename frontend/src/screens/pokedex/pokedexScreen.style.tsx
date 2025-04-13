import styled from 'styled-components';

export const PokedexScreenWrapper = styled.main`
    background-image: url('/assets/images/bg.jpg');
    height: 100vh;
    border:0;
    margin:0;
    background-size: cover;

    .actions_container{
        position:absolute;
        right:30px;
        top:30px;

        img{
            width:100px;
            height:50px;
        }
    }

    .title_section{
        padding:50px 0;
        margin-bottom: 50px;
        height:80px;
        display:flex;
        justify-content:center;

        h2{
            font-family:'pokemon';
            letter-spacing:3px;
            font-size:50px !important;
        }
    }

    .pokedex_container{
        padding:10px;
        //background-color:rgba(22,22,22,0.7);
        background-color:#FFFFFF;
        width:80%;
        height:350px;
        overflow-y:scroll;
        display:flex;
        margin-left:auto;
        margin-right:auto;

    }

    .action_img{
        cursor:pointer;
    }

    .shadow{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:rgba(0,0,0,0.7);
    }
    .modal{
        background-color:#FFFFFF;
        z-index:100;
        padding:20px;
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        display:flex;
        flex-wrap:wrap;
        gap:10px;

        input{
            width:45%;
            height:25px;
            border:none;
            background-color: rgb(221,221,221);
            padding:5px;
        }
        
        
    }

    .close_modal{
        position:absolute;
        right:10px;
        top:10px;
        cursor:pointer;
    }

    .btn_container{
        width:100%;
        display:flex;
        justify-content:center;
        margin:10px 0;

        button{
            border:none;
            color:white;
            padding:5px 15px;
            background-color: #385226;
        }
    }

`;

export default PokedexScreenWrapper;
