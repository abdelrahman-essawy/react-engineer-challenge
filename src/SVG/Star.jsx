import React from 'react';

const Star = ({ color = 'white', width = 5, height = 5 }) => {
    if (color === 'white') return <svg
        className={`w-${width} h-${height}`}
        version={1.0} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 980.000000 944.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,944.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M4805 9430 c-255 -28 -494 -170 -634 -378 -35 -53 -284 -551 -937
-1877 -82 -167 -130 -230 -217 -286 -95 -62 -145 -74 -477 -123 -173 -25 -657
-95 -1075 -156 -418 -61 -791 -120 -830 -131 -160 -48 -322 -155 -431 -287
-67 -81 -146 -238 -176 -347 -31 -118 -31 -328 0 -445 29 -108 87 -227 150
-311 27 -36 401 -408 830 -827 446 -436 794 -783 812 -811 45 -71 72 -155 77
-241 4 -65 -20 -222 -178 -1135 -175 -1014 -183 -1066 -182 -1190 0 -156 21
-245 87 -380 126 -254 363 -431 641 -480 163 -28 336 -13 475 42 36 15 268
133 515 263 1168 615 1444 759 1490 776 73 26 241 24 315 -3 31 -11 481 -244
1000 -518 520 -274 971 -508 1002 -521 130 -51 281 -71 413 -54 371 46 671
308 767 668 15 56 20 110 21 202 1 119 -8 176 -182 1185 -165 958 -182 1068
-178 1145 5 94 27 162 77 240 18 28 362 371 811 811 430 419 803 792 831 828
63 84 121 203 150 311 31 118 31 327 -1 445 -69 255 -236 464 -461 576 -134
66 -156 71 -660 144 -173 25 -421 61 -550 80 -129 19 -437 64 -685 100 -247
36 -468 70 -490 76 -68 18 -157 72 -218 131 -56 55 -70 81 -346 640 -726 1469
-715 1448 -780 1525 -188 224 -488 344 -776 313z m196 -390 c92 -17 194 -73
261 -142 57 -58 74 -88 276 -497 731 -1484 777 -1574 840 -1653 101 -126 256
-236 407 -288 78 -27 92 -29 1230 -195 550 -80 1018 -150 1040 -156 305 -85
454 -435 308 -723 -34 -67 -35 -68 -886 -898 -800 -782 -818 -802 -886 -965
-52 -127 -65 -196 -65 -343 0 -130 7 -177 178 -1160 97 -564 179 -1056 183
-1095 17 -220 -126 -429 -348 -506 -87 -31 -239 -32 -319 -2 -30 11 -483 245
-1007 521 -672 355 -979 511 -1045 533 -79 27 -112 33 -222 37 -144 5 -231 -6
-341 -46 -38 -13 -500 -251 -1025 -527 -526 -277 -983 -511 -1015 -521 -86
-25 -212 -23 -297 5 -224 75 -377 295 -355 511 4 32 86 522 184 1087 172 999
177 1032 177 1168 0 115 -4 154 -22 220 -31 108 -100 247 -159 320 -27 33
-399 402 -826 820 -428 418 -791 780 -808 805 -47 72 -71 147 -76 240 -14 232
121 439 333 510 36 12 470 80 1089 170 567 82 1065 157 1107 165 197 39 387
156 513 317 60 75 87 129 818 1611 222 449 240 481 294 536 63 63 176 125 253
140 64 12 148 13 211 1z" />
        </g>
    </svg>



    return <svg
        className={`w-${width} h-${height}`}
        version={1.0} xmlns="http://www.w3.org/2000/svg"
        width={`16px`} height={`16px`}
        viewBox="0 0 980.000000 940.000000" preserveAspectRatio="xMidYMid meet"
    >
        <g transform="translate(0.000000,940.000000) scale(0.100000,-0.100000)" fill={color}>
            <path d="M4732 9370 c-145 -38 -290 -139 -367 -256 -21 -31 -225 -437 -455-902 -230 -466 -467 -947 -528 -1069 -63 -129 -128 -245 -153 -276 -84 -103-198 -180 -319 -217 -36 -11 -580 -94 -1210 -185 -630 -91 -1174 -172 -1210-181 -167 -40 -328 -166 -407 -319 -63 -121 -77 -181 -77 -315 0 -157 33 -261 121 -382 18 -26 375 -378 791 -784 991 -964 978 -950 1029 -1049 23 -44 49-109 59 -145 35 -136 33 -154 -181 -1390 -225 -1293 -223 -1278 -171 -1437 63-194 216 -348 418 -421 65 -24 87 -27 203 -27 151 0 182 8 345 90 58 29 535 279 1060 555 525 276 987 512 1025 525 131 44 278 42 411 -5 31 -10 527 -266 1103 -569 576 -302 1076 -559 1112 -572 90 -30 233 -37 333 -15 235 53 432 240 497 471 9 31 14 95 13 170 -1 109 -19 228 -197 1256 -142 820 -197 1158-197 1215 0 151 57 301 158 417 31 36 429 429 884 873 497 484 842 828 863 860 245 368 67 871 -350 993 -38 11 -569 92 -1180 181 -610 88 -1139 165 -1174 170 -145 24 -278 97 -383 208 -58 62 -78 100 -335 619 -150 304 -396 802 -547 1107 l-274 555 -79 78 c-90 91 -179 143 -299 173 -100 26 -233 26 -332 0z" />
        </g>
    </svg>

};
export default Star;