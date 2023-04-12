import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SocialsContainer } from "./Socials.styled";

function Socials() {
  return (
    <SocialsContainer>
      
      <a href="https://www.youtube.com/@motorhandballclub5101/featured" target="_blank"><AiFillYoutube color="#051934" size="32px" /></a>
      <a href="https://www.instagram.com/handball.club.motor/" target="_blank"><AiFillInstagram color="#051934" size="32px" /></a>
      <a href="https://www.facebook.com/handball.club.motor/" target="_blank"><AiFillFacebook color="#051934" size="32px" /></a>
     
      
    </SocialsContainer>
  );
}

export default Socials;
