export const crypto = (text, interval, setName) => {
    clearInterval(interval)

    const abc = "abcdefghijklmnopqrstuvwxyz".split('')
    const symbols = "!@#$%^&*?.,;:".split('')

    let counter = -5;
    const ticksPerLetter = Math.floor(32 / text.length)

    interval = setInterval(() => {

        let index = Math.floor(counter / ticksPerLetter)
        let newText = text.split('').map((e, i) => {
            let symbol = (e == " " || i <= index) ? e : symbols[Math.floor(Math.random() * abc.length)]
            let letter = (e == " " || i <= index) ? e : abc[Math.floor(Math.random() * abc.length)]

            return symbols.includes(e) ? symbol : letter
        })

        setName(newText)
        counter++

        if (counter > text.length * ticksPerLetter) {
            clearInterval(interval);
        }
    }, 20)

}