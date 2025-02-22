type CalorieDisplayProps = {
    calories: number,
    text: string,
    colorText: string
}

export default function CalorieDisplay({calories, text, colorText} : CalorieDisplayProps) {
    return(
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span className={`font-black text-6xl ${colorText}`}>{calories}</span>
                {text}
        </p>
    )
}
