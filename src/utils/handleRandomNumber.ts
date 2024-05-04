

export default function handleRandomNumber(min: number, max: number): number {
    return Math.floor(max* Math.random() + min)
}