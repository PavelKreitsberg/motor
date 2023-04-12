import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { SocialsContainer } from "./Socials.styled";

function Socials() {
  return (
    <SocialsContainer>
      <AiFillYoutube color="#051934" size="32px" />
      <a href="https://www.instagram.com/handball.club.motor/" target="_blank"><AiFillInstagram color="#051934" size="32px" /></a>
     
      <AiFillFacebook color="#051934" size="32px" />
    </SocialsContainer>
  );
}

export default Socials;
