import SkillBarPlain from "./motion";

function ProgressSkill() {
    return (
        <>
            <SkillBarPlain
                label="HTML"
                value={95}
                duration={1.4}
            />
            <SkillBarPlain
                label="CSS / Sass"
                value={95}
                duration={1.6}
            />
            <SkillBarPlain
                label="Bootstrap / Tailwind"
                value={95}
                duration={1.8}
            />
            <SkillBarPlain
                label="Git"
                value={90}
                duration={2}
            />
            <SkillBarPlain
                label="JavaScript"
                value={85}
                duration={2.2}
            />
            <SkillBarPlain
                label="React JS"
                value={80}
                duration={2.4}
            />
            <SkillBarPlain
                label="Vue JS"
                value={30}
                duration={2.6}
            />
            <SkillBarPlain
                label="Next JS"
                value={30}
                duration={2.8}
            />
            <SkillBarPlain
                label="Python"
                value={20}
                duration={2.8}
            />
            <SkillBarPlain
                label="C++"
                value={20}
                duration={2.8}
            />
        </>
    );
}

export default ProgressSkill;
