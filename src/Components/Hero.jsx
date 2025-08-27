import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Hero3 from "./Hero3";
import Hero2 from "./Hero2";
import Hero1 from "./Hero1";

const Hero = () => {

	const shuffleArray = (array) =>{
		const copyArr = [...array];

		for (let i = copyArr.length-1; i >= 0 ; --i) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [copyArr[i], copyArr[j]] = [copyArr[j],copyArr[i]];
		}
		return copyArr;
	};

	const heroes = [ <Hero3 />,<Hero2 />,<Hero1 />];

	const Heroes = shuffleArray(heroes) 
	return (
		<Swiper
			modules={[Autoplay, EffectFade]}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			loop={true}
			autoplay={{ delay: 5000, disableOnInteraction: false }}
			className="w-full h-screen"
		>
			{Heroes.map((hero, index) => (
				<SwiperSlide key={index}>{hero}</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Hero;
