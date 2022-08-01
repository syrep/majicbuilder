import dynamic from "next/dynamic";

const ImageCarouselNoSSR = dynamic(() => import("./ImageCarousel"), {
  ssr: false,
});
// need the above to pull in the component without ssr, as we can't pull in the function this way without ssr
// it's a bit of a workaround, but that means we would pass in data to this function potentially down the line
// and that data would populate the array it uses to return as a component

export default function ImageCarouselView() {
  // Needed to be done with no SSR due to "window not defined" on server-side rendering
  // https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
  return (
    <>
      <ImageCarouselNoSSR picturearray={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </>
  );
}
// TODOs:
// can't fix slow scrolling not snapping because the spec doesn't define it, also firefox tends to have issues with scrolling to nearest
// need to make it accept array inputs with JSON of [{URL: uri, Alt_text: alt}] and then split to proper parts
// need to add overlay (?onclick) controls maximise thing to see the content larger (when you click on images)
// fix slider starting off slightly too far right on load in mobile device -- not that important but can be seen if there is a background colour and it's rounded borders (appears to be from margin on left when initially loading page)
// fix nav buttons being slow and causing re-renders (maybe from onclick doing triggering function any times)
// fix highlighting styling on last element in list
// fix the way the nav button spread to edge of container when not constrained (due to .slides class having 100% width instead of just width of single image)
