
export const requiredField = (value: any) => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) {
        return 'Max length is 30 sumbols'
    }
    return undefined
}