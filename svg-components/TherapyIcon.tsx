import React from "react";

export const TherapyIcon = ({ className, ...props }:{className: any}) => {
  return (
    <svg
      // viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={className}
    >
      <path
        d="M233.333 160.979C233.333 212.571 290.864 266.92 338.323 302.977C364.963 323.215 378.28 333.333 400 333.333C421.72 333.333 435.04 323.215 461.677 302.978C509.137 266.921 566.667 212.572 566.667 160.978C566.667 67.9727 474.997 33.2488 400 105.095C325.003 33.2488 233.333 67.9727 233.333 160.979Z"
        fill="#9844C6"
      />
      <path
        d="M208.664 712.946H200C168.573 712.946 152.86 712.947 143.096 703.183C133.333 693.42 133.333 677.706 133.333 646.28V609.213C133.333 591.93 133.333 583.29 137.773 575.573C142.212 567.853 148.909 563.96 162.303 556.17C250.486 504.88 375.717 476.01 459.303 525.863C464.917 529.213 469.97 533.257 474.283 538.103C492.887 559 491.533 590.537 470.093 609.25C465.563 613.2 460.74 616.2 455.88 617.24C459.873 616.777 463.7 616.247 467.353 615.663C497.733 610.817 523.233 594.583 546.58 576.946L606.82 531.443C628.057 515.4 659.577 515.397 680.817 531.433C699.94 545.873 705.787 569.647 693.697 589.023C679.6 611.623 659.737 640.533 640.663 658.196C621.563 675.886 593.13 691.68 569.917 702.883C544.2 715.297 515.793 722.447 486.897 727.127C428.293 736.61 367.22 735.163 309.211 723.213C276.418 716.457 242.36 712.946 208.664 712.946Z"
        fill="#4CA054"
      />
    </svg>
  );
};
