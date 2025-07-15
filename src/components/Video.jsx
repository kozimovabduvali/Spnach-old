import bg from "../assets/img/video/videobg.png";
import shap1 from "../assets/img/video/shap1.png";
import shap2 from "../assets/img/video/shap1.png";
import videoimg from "../assets/img/video/OurProject.gif";
import { Container } from './grid';
export default function Video() {
    return (
        <div className='video relative z-1 bg-[#6EE1F4] pt-20'>
            <img
                className='absolute left-0 bottom-0 w-full h-full -z-1 object-fill'
                src={bg}
                alt="video background"
            />
            <div className='absolute top-5 xl:top-20 left-1/2 -translate-x-1/2 w-[90%] flex justify-between'>
                <img className='max-w-40 md:max-w-70 h-auto 2xl:max-w-100 object-contain' src={shap1} alt="" />
                <img className='max-w-40 md:max-w-70 h-auto 2xl:max-w-100 object-contain' src={shap2} alt="" />
            </div>
            <Container>
                <div className="player-wrapper">
                    <img className='mx-auto w-[90%] translate-y-5 2xl:translate-y-20 -mt-20 xl:-mt-40' src={videoimg} alt="spanch video" />
                </div>
            </Container>
        </div>
    );
}
