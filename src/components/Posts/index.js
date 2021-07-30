import React, {  useState } from 'react';
import {BiChevronDown} from 'react-icons/bi'
import { Post,  HeaderPost, ResultsPost, ButtonPost } from './styles';
import PefilAmigoImg from '../../assets/amigo.svg';
import RelogioImg from '../../assets/relogio.svg';
import Cadeado from '../../assets/cadeado.svg';
import LikeImg from '../../assets/like.svg';
import ComentarioImg from '../../assets/comentario.svg';
import CompartilhamentarImg from '../../assets/compartilhar.svg'
import PlanetaImg from '../../assets/planeta.svg';

export function Posts(){
  const [isLike,setIsLike] = useState('Seja o primeiro a curtir')
  const [colorLike2,setColorLike2]= useState('#F2F3F5');
  const [colorLike,setColorLike]= useState('#F2F3F5');

  const [statusLike,setStatusLike] = useState('Curtir');
  const [statusLike2,setStatusLike2] = useState('Curtir');
  const [contLike,setContLike] = useState('1');

  // #00c2fe

  function Likebutton(){
   
    if (isLike === 'Seja o primeiro a curtir'){
      setIsLike('1 pessoa curtiu isso');
      setStatusLike('Curtiu');
      setColorLike('#00c2fe')
    } else {
      setIsLike('Seja o primeiro a curtir');
      setStatusLike('Curtir');
      setColorLike('#F2F3F5');
    }
  }

  function AddLike(){
    if (contLike === '1'){
     setContLike('2');
     setStatusLike2('Curtiu');
     setColorLike2('#00c2fe');
    }else{
     setContLike('1');
     setStatusLike2('Curtir');
     setColorLike2('#F2F3F5');
    }
  }
    return(
        <>
        <Post>
            <HeaderPost>
         <div>
            <img src={PefilAmigoImg} alt="foto do perfil" className="img_perf"/>
            <section>
            <p>
             <h1> Rayssa Leal </h1>  <br/>     
               <span> 
            <img src={RelogioImg} alt="Relogio"/>      
              há cerca de 4 horas 
              <span>
            <img src={Cadeado} alt="Cadeado"/>      
              Somente eu 
               </span>
              </span>
              </p>
             </section> 
                </div>
                <BiChevronDown size={30}/>
            </HeaderPost>
            <p className="text">Essa publicação está configurada no modo privativo “somente eu ”.</p>
            <ResultsPost>
                <p>
              <img src={LikeImg} alt="like"/>
              {isLike}
              </p>
              <span>
              <span className="spanc">0 comentários</span> 
              0 compartilhamentos
              </span>
            </ResultsPost>
            <ButtonPost>
                <button type="button" 
                onClick={Likebutton}
                style={{   background: colorLike   }} >
                    <img src={LikeImg} alt="likebutton"/>
                   {statusLike}
                    </button>
                <button type="button">
                <img src={ComentarioImg} alt="likebutton"/>
                    Comentários
                    </button>
                <button type="button">
                <img src={CompartilhamentarImg} alt="likebutton"/>
                    Compartilhar
                    </button>

            </ButtonPost>
        </Post>
        <Post>
            <HeaderPost>
         <div>
            <img src={PefilAmigoImg} alt="foto do perfil" className="img_perf"/>
            <section>
            <p>
             <h1> Rayssa Leal </h1>  <br/>     
               <span> 
            <img src={RelogioImg} alt="Relogio"/>      
              há 4 dias
              <span>
            <img src={PlanetaImg} alt="Cadeado"/>      
              Público
               </span>
              </span>
              </p>
             </section> 
                </div>
                <BiChevronDown size={30}/>
            </HeaderPost>
            <p className="text">Ganhei a medalha de prata!!!!!!</p>
            <ResultsPost>
                <p>
              <img src={LikeImg} alt="like"/>
              {contLike} pessoa curtiu isso
              </p>
              <span>
             <span className="spanc">0 comentários</span> 
              3 compartilhamentos
              </span>
            </ResultsPost>
            <ButtonPost>
                <button type="button"  
                onClick={AddLike}
                style={{background: colorLike2}}
                
                >
                    <img src={LikeImg} alt="likebutton"/>
                    {statusLike2}
                    </button>


                <button type="button">
                <img src={ComentarioImg} alt="likebutton"/>
                    Comentários
                    </button>
                <button type="button">
                <img src={CompartilhamentarImg} alt="likebutton"/>
                    Compartilhar
                    </button>

            </ButtonPost>
        </Post>
        
       
        </>
    )
}