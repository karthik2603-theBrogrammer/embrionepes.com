"use client";
import {
	motion,
	useAnimation,
	useMotionTemplate,
	useSpring,
} from "framer-motion";

export const HackathonThemesCard = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	const cardControls = useAnimation();

	function onMouseMove({ currentTarget, clientX, clientY }) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<motion.div			
			variants={{
				normal: {
					scale: 1
				},
				up: {
					scale: 1.05
				}
			}}
			onMouseMove={onMouseMove}
			className=" overflow-hidden h-full relative duration-700 border rounded-xl hover:bg-zinc-300/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 mx-12 md:mx-3 "
			animate={cardControls}
			onMouseEnter={() => {
				cardControls.start("up");	
			}}
			onMouseLeave={() => {
				cardControls.start("normal");
			}}
			initial="normal"
		>
			<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
			</div>

			{children}
		</motion.div>
	);
};




export const Article= ({ title, description, themeNumber }) => {
	return (

			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs my-1 duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						<span>{themeNumber}</span>
					</span>
					{/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(0)}
					</span> */}
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{description}
				</p>
			</article>

	);
};