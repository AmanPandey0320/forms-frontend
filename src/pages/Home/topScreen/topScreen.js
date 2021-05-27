import { SectionWrapper,CardWrapper } from '../../../css/homeStyles'
import bg from '../../../assets/images/homebg1.png';
import img1 from '../../../assets/images/card1.svg'
import img2 from '../../../assets/images/card2.svg'
import Image from '../../../Components/Image';
import { CreateForm } from '../../../logic/homeLogic'
import Card from './card';
const text1 = `Create a survey`;
const text2 = `Take a Test/Exam`;
 const TopScreen = () => {
     
     return ( 
         <SectionWrapper height="100vh" width='100%'>
             <Image src={bg} alt="bg" height="100vh" width="100%"/>
             <CardWrapper>
                 <Card img={img1} text = {text1} button="Create Form" handler={CreateForm}/>
                 <Card img={img2} text = {text2} button="Create Test" handler={CreateForm} />
             </CardWrapper>
         </SectionWrapper>
      );
 }
  
 export default TopScreen;