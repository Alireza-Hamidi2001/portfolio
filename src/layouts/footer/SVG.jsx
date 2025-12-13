function SVG() {
    return (
        <svg
            width="0"
            height="0"
        >
            <defs>
                {/* Instagram */}
                <linearGradient
                    id="instagramGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="#405DE6"
                    />
                    <stop
                        offset="25%"
                        stopColor="#833AB4"
                    />
                    <stop
                        offset="50%"
                        stopColor="#E1306C"
                    />
                    <stop
                        offset="75%"
                        stopColor="#F56040"
                    />
                    <stop
                        offset="100%"
                        stopColor="#FCAF45"
                    />
                </linearGradient>

                {/* Telegram */}
                <linearGradient
                    id="telegramGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="#0088CC"
                    />
                    <stop
                        offset="100%"
                        stopColor="#26A5E4"
                    />
                </linearGradient>

                {/* LinkedIn */}
                <linearGradient
                    id="linkedinGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="#0A66C2"
                    />
                    <stop
                        offset="100%"
                        stopColor="#004182"
                    />
                </linearGradient>

                {/* GitHub */}
                <linearGradient
                    id="githubGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="#333a43"
                    />
                    <stop
                        offset="50%"
                        stopColor="#232930"
                    />
                    <stop
                        offset="100%"
                        stopColor="#564c6a"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SVG;
