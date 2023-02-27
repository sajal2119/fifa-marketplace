import * as React from "react";
import { SVGProps } from "react";
const SvgTicket = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 27 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            d="m17.976 17.997-6.862 6.862a.2.2 0 0 1-.283 0l-2.597-2.597a.216.216 0 0 1-.007-.29c.33-.403.5-.925.474-1.477a2.584 2.584 0 0 0-.765-1.69 2.584 2.584 0 0 0-1.69-.764 2.154 2.154 0 0 0-1.477.473.216.216 0 0 1-.29-.007l-2.6-2.601a.2.2 0 0 1 0-.283L16.36 1.141a.2.2 0 0 1 .283 0l2.601 2.602a.216.216 0 0 1 .007.29c-.33.402-.5.924-.474 1.476.03.621.305 1.23.765 1.69a2.59 2.59 0 0 0 1.69.765 2.154 2.154 0 0 0 1.477-.474.216.216 0 0 1 .29.007l2.596 2.597a.2.2 0 0 1 0 .283l-7.62 7.62Z"
            stroke="currentcolor"
            strokeWidth={2}
            strokeMiterlimit={10}
        />
        <path
            strokeWidth={2}
            stroke="currentcolor"
            d="m11.204 6.298 9.345 9.344"
        />
    </svg>
);
export default SvgTicket;
