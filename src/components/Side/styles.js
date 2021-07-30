import styled from 'styled-components';

export const Container = styled.div`
  background: #FFFFFF;
  width: 305px;
  height: 420px;
  margin-top: 32px;
  margin-left: 35px;
  border-radius: 25px;
  
 
  .perfil_img{
      width: 137px;
      height: 132px;
      border-radius: 66px;
      margin-top: -85px;
      margin-left: 80px;
      padding: 3px;
      background: #FFF;
      border: 3px solid #0E3F5D;
  }
  header{
     height: 190px;
     border-radius: 25px;

     img{
         width: 305px;
         height: 190px;
         border-radius: 25px;
     }
  }
`;

export const Content = styled.div`
   
   h1{
       color: var(--name);
       font-size: 1.5rem;
       text-align: center;
       margin-top: 5px;
   }
   h3{
       text-align: center;
   }

   p{
       text-align: center;
       font-weight: 300;
   }

   section{

    span{
        margin-left: 15px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        color: #969CB3;
        img{
            height: 30px;
            width: 30px;
            
        }

    }

    div{
        display: flex;
        align-items: center;

        .casa{
         margin-left: 50px;
        }
    }
   }

`;