// components/SkillBarPlain.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./skillbar.css"; // فایل CSS را بساز

export default function SkillBarPlain({
    label = "Skill",
    value = 75,
    duration = 1.2,
    threshold = 0.25,
}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return (
        <div
            className="skillbar-root"
            ref={ref}
        >
            <div className="skillbar-header">
                <span className="skillbar-label">{label}</span>
                <span className="skillbar-value">{value}%</span>
            </div>
            <div
                className="skillbar-track"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={inView ? value : 0}
            >
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: inView ? `${value}%` : "0%" }}
                    transition={{ duration: duration, ease: "easeOut" }}
                    className="skillbar-fill"
                />
            </div>
        </div>
    );
}
