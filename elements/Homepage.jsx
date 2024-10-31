export function HomePage() {
    return (
        <div className="sun">
            <svg viewBox="0 0 622 622" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_84_275)">
                    <circle cx="311" cy="311" r="240" fill="#A702C4" fillOpacity="0.5" shapeRendering="crispEdges" />
                </g>
                <mask id="mask0_84_275" maskType="alpha" maskUnits="userSpaceOnUse" x="66" y="72" width="488" height="480">
                    <rect x="66" y="72" width="488" height="227" fill="#D9D9D9" />
                    <rect x="66" y="312" width="488" height="24" fill="#D9D9D9" />
                    <rect x="66" y="350" width="488" height="22" fill="#D9D9D9" />
                    <rect x="76" y="387" width="467" height="21" fill="#D9D9D9" />
                    <rect x="89" y="421" width="441" height="20" fill="#D9D9D9" />
                    <rect x="109" y="453" width="403" height="18" fill="#D9D9D9" />
                    <rect x="135" y="481" width="350" height="18" fill="#D9D9D9" />
                    <rect x="161" y="508" width="294" height="18" fill="#D9D9D9" />
                    <rect x="207" y="535" width="210" height="17" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_84_275)">
                    <path d="M551 312C551 444.548 443.548 552 311 552C178.452 552 71 444.548 71 312C71 179.452 178.452 72 311 72C443.548 72 551 179.452 551 312Z" fill="url(#paint0_linear_84_275)" />
                </g>
                <defs>
                    <filter id="filter0_d_84_275" x="0" y="0" width="622" height="622" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="19" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_84_275" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="26" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.62 0 0 0 0 0 0 0 0 0 0.547667 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84_275" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84_275" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_84_275" x1="311" y1="72" x2="311" y2="552" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFD505" />
                        <stop offset="0.2" stopColor="#FBA83D" />
                        <stop offset="0.44" stopColor="#FF615C" />
                        <stop offset="0.71" stopColor="#FF3BA5" />
                        <stop offset="0.91" stopColor="#DF0091" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}