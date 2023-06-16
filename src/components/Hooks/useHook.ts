import   { useRef, useEffect } from "react";

export const useHook = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	const slides = Array.from(trackRef.current?.children || []) as HTMLElement[];
	const slideWidth = trackRef.current?.offsetWidth || 0;

	useEffect(() => {
		const setSlidePosition = (slide: HTMLElement, index: number) => {
			slide.style.left = `${slideWidth * index}px`;
		};

		slides.forEach(setSlidePosition);
	}, [slides, slideWidth]);

	const moveToSlide = (currentSlide: HTMLElement, targetSlide: HTMLElement) => {
		// trackRef.current.style.transform = `translateX(-${targetSlide.style.left})`;
		[currentSlide, targetSlide].forEach((slide) =>
			slide.classList.toggle("current-slide")
		);
	};

	const handlePrevSlide = () => {
		const currentSlide = trackRef.current?.querySelector(
			".current-slide"
		) as HTMLElement;
		const prevSlide = currentSlide.previousElementSibling as HTMLElement;

		if (prevSlide) {
			moveToSlide(currentSlide, prevSlide);
		}
	};

	const handleNextSlide = () => {
		const currentSlide = trackRef.current?.querySelector(
			".current-slide"
		) as HTMLElement;
		const nextSlide = currentSlide.nextElementSibling as HTMLElement;

		if (nextSlide) {
			moveToSlide(currentSlide, nextSlide);
		}
	};
	return {handleNextSlide,handlePrevSlide,trackRef};
};
