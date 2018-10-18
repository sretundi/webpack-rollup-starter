
export const ACTION_CONTANTS = {
    EXAMPLE: 'EXAMPLE',
}

const exampleAction = (exampleData) => {
    return {
        type: ACTION_CONTANTS.EXAMPLE,
        exampleData,
    }
}

export default { exampleAction };

