import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ImageCarousel.module.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";

function scrollSmoothTo(elementId) {
  // used so we can scroll without anchor tags
  // https://stackoverflow.com/questions/4020199/go-to-anchor-without-changing-url
  var element = document.getElementById(elementId);
  element.scrollIntoView({
    // chose nearest so it doesn't move too much
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    block: "nearest",
    behavior: "smooth",
  });
}

function sliderNavButtons() {
  // first get value of current slide, then trim to get number, then perform
  let currVisSlide = document
    .getElementById("slides-flow")
    .getAttribute("data-current-slide");
  if (currVisSlide == null) return [null, null];
  let currentSlide = currVisSlide.slice(6);
  // console.log(currentSlide);
  let next_slide = parseInt(currentSlide) + 1;
  let previous_slide = parseInt(currentSlide) - 1;

  return [previous_slide, next_slide];
}

// START INTERSECT OBSERVER CODE
function useIntersect({ root, rootMargin, threshold }) {
  // function useIntersect({ root = null, rootMargin, threshold = 0 }) {
  // the old function call with props is above
  // used https://codesandbox.io/s/04vvrxj79p?file=/src/index.js
  // as a model to figure out what to do
  //
  // need to have the intersect code into referring file otherwise it becomes a SSR nightmare
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);

  // if (typeof window !== "undefined") {
  //   // detect being within client side, this is needed for build time
  //   const observer = useRef(
  //     new window.IntersectionObserver(([entry]) => updateEntry(entry), {
  //       root,
  //       rootMargin,
  //       threshold,
  //     })
  //   );
  // }

  useEffect(() => {
    // detect being within client side, this is needed for build time
    // below is another way to make it work https://stackoverflow.com/questions/59424347/gatsby-intersectionobserver-is-not-defined
    const observer = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const currentObserver = observer;
    // const {current: currentObserver} = observer; /// was the old but broken
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
}
// END INTERSECT OBSERVER CODE

const ImageSlides = ({ currentSlide, index }) => {
  // the below sets up the intersect threshold out of 100 points
  const [ref, entry] = useIntersect({
    threshold: [0, 0.25, 0.5, 0.75, 1],
  });

  // console.log(entry.target);
  // console.log(currentSlide);
  // The above were used to test what's visbile as per https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

  useEffect(() => {
    let currslide = "preview-slide-" + currentSlide;
    let elem = document.getElementById(currslide);

    let remainingSlides = document.getElementById("remaining-slides");
    // console.log(remainingSlides);

    // console.log(entry.intersectionRatio);

    if (
      currentSlide &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.5
    ) {
      // goal is to find element by ID, then add class to that element, once no-longer same currentSlide as visible slide then remove class

      // Essentially want the formatting based on isIntersecting to apply to the div style of slide-1 etc, that way we will affect the bottom too

      document
        .getElementById("slides-flow")
        .setAttribute("data-current-slide", entry.target.id);
      // doing the data attribute before the check of the elem stuff
      // if (!elem) return null; // changed to the below so we can see what it is
      if (elem === null) {
        // had to change from !elem to elem === null as it said "destroy" is not a function
        remainingSlides.classList.add(styles.active_slider);
        remainingSlides.classList.add("active_preview");
        return;
        //also return nothing instead of return null for same reason
      }
      elem.classList.add(styles.active_slider);
      // console.log("my current slide is", currslide);
      elem.classList.add("active_preview");
    }

    if (
      currentSlide &&
      entry.isIntersecting &&
      entry.intersectionRatio <= 0.25
    ) {
      // goal is to find element by ID, then add class to that element, once no-longer same currentSlide as visible slide then remove class

      // Essentially want the formatting based on isIntersecting to apply to the div style of slide-1 etc, that way we will affect the bottom too

      // if (!elem) return null;
      if (elem === null) {
        // had to change from !elem to elem === null as it said "destroy" is not a function
        remainingSlides.classList.remove(styles.active_slider);
        remainingSlides.classList.remove("active_preview");
        return;
        //also return nothing instead of return null for same reason
      }
      elem.classList.remove(styles.active_slider);
      // console.log("the current slide is", currslide);
      elem.classList.remove("active_preview");
    }

    return function cleanup() {
      // if (!elem) return null;
      if (elem === null) {
        // had to change from !elem to elem === null as it said "destroy" is not a function
        remainingSlides.classList.remove(styles.active_slider);
        remainingSlides.classList.remove("active_preview");
        return;
        //also return nothing instead of return null for same reason
      }
      elem.classList.remove(styles.active_slider);
      // console.log("the current slide is", currslide);
      elem.classList.remove("active_preview");
    };
  });
  // how to set more than one style name with CSS Module
  // https://stackoverflow.com/questions/33949469/using-css-modules-how-do-i-define-more-than-one-style-name
  // so needed a mix of literals and arrays to make it work with static and dynamic class names respectively
  return (
    // needing this to return the looped slides as we can't run an intersection oberver on them without it
    <>
      <div
        className={[styles.slides_item, styles["slide-" + currentSlide]].join(
          " "
        )}
        id={"slide-" + currentSlide}
        aria-label={"slide " + currentSlide}
        tabIndex="0"
        ref={ref}
      >
        <Image
          alt={currentSlide}
          src="https://via.placeholder.com/500.png"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default function ImageCarousel({ picturearray }) {
  /* See these links for example carousels
          https://css-tricks.com/css-only-carousel/
          https://splidejs.com/tutorials/thumbnail-carousel/
          https://levelup.gitconnected.com/how-to-make-a-fully-accessible-css-only-carousel-40e8bd62032b
          https://chenhuijing.com/blog/building-a-css-only-image-gallery/
          https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
          https://www.w3schools.com/w3css/w3css_slideshow.asp  
          https://www.geeksforgeeks.org/how-to-create-image-slider-in-reacts/
          https://stackoverflow.com/questions/57326493/how-can-i-snap-scroll-and-trigger-the-event-when-snapped
          https://tannerhodges.github.io/snap-slider/
          https://dev.to/producthackers/intersection-observer-using-react-49ko
          https://codepen.io/SimonEvans/pen/Qqjxde
          https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5
          https://codesandbox.io/s/04vvrxj79p?file=/src/index.js

          // new one
          https://web.dev/css-scroll-snap/
          */
  const slide_length = picturearray.length;

  return (
    <>
      <section className={styles.carousel} aria-label="carousel" tabIndex="0">
        <a className={styles.carousel__skip_link} href="#skip-link">
          Skip the Carousel
        </a>
        <div className={styles.slide_nav_container}>
          <IconButton
            className={styles.slide_left}
            onClick={() => {
              let [previous_slide, next_slide] = sliderNavButtons();
              // console.log("my prev", previous_slide);
              if (previous_slide == null) return null;
              if (previous_slide == 0) {
                return null;
              }
              if (previous_slide <= slide_length) {
                scrollSmoothTo("slide-" + previous_slide);
              }
            }}
          >
            <ChevronLeftIcon />
          </IconButton>

          <div
            id="slides-flow"
            className={styles.slides}
            data-current-slide={null}
            // data-current-slide={"no-slide"}
          >
            {picturearray.map((value, index) => {
              return (
                <ImageSlides
                  currentSlide={value}
                  index={index}
                  key={"main " + index}
                />
              );
            })}
          </div>
          <IconButton
            className={styles.slide_right}
            onClick={() => {
              let [previous_slide, next_slide] = sliderNavButtons();
              // console.log("my next", next_slide);
              if (next_slide == null) return null;
              // console.log("slide length", slide_length);
              if (next_slide == slide_length + 1) {
                return null;
              }
              if (next_slide >= 2) {
                scrollSmoothTo("slide-" + next_slide);
              }
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
        {/* The below is the preview images */}
        <div className={styles.carousel__nav}>
          {picturearray.map((value, index, { length }) => {
            if (index <= 3) {
              return (
                <a
                  className={[
                    styles.slider_nav,
                    styles["preview-slide-" + value],
                  ].join(" ")}
                  // href={"#slide-" + value}
                  onClick={() => {
                    scrollSmoothTo("slide-" + value);
                  }}
                  aria-label={"Go to slide " + value}
                  key={"bottom " + index}
                  // ref={"ref " + index}
                  //above throws error about string refs
                  id={"preview-slide-" + value}
                >
                  <Image
                    alt={value}
                    src="https://via.placeholder.com/500.png"
                    width={100}
                    height={100}
                  />
                </a>
              );
            }
            // https://stackoverflow.com/questions/38176352/javascript-map-array-last-item
            if (length - 1 === index) {
              let remainingImages = index - 3;
              return (
                <a
                  className={[
                    styles.slider_nav,
                    styles["preview-slide-" + value],
                  ].join(" ")}
                  // href={"#slide-" + value}
                  // onClick={() => {
                  //   scrollSmoothTo("slide-" + value);
                  // }}
                  // aria-label={"Go to slide " + value}
                  key={"reamining " + remainingImages}
                  // ref={"ref " + index}
                  //above throws error about string refs
                  id={"remaining-slides"}
                >
                  <Image
                    alt={"+" + remainingImages}
                    src="https://via.placeholder.com/5009090.png"
                    width={100}
                    height={100}
                    // sx={{
                    //   "&:before": {
                    //     lineHeight: 16,
                    //     color: "red",
                    //   },
                    // }}
                  />
                </a>
              );
            }
          })}
        </div>
        <div
          className={styles.carousel__skip_message}
          id="skip-link"
          tabIndex="0"
        ></div>
      </section>
    </>
  );
}
