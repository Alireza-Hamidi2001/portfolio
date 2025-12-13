export const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: -80,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: 80,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
export const fadeTop = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
export const fadeBottom = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
