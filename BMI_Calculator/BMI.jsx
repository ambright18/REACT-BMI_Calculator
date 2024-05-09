import React, {useState, useMemo} from "react";
import styles from "..//BMI_Calculator/BMI.module.css";

const defaultWeight = 50;
const defaultHeight = 150;

const BMI = () => {
    const [height, setHeight] = useState(defaultHeight);
    const [weight, setWeight] = useState(defaultWeight);

    const onHeightChange = (event) => {
        const inputHeight = event.target.value;
        setHeight(inputHeight);
    }

    const onWeightChange = (event) => {
        const inputWeight = event.target.value;
        setWeight(inputWeight);
    }

    //useMemo here
    const output = useMemo(() => {
        const calculatedHeight = height / 100;
        return(weight / (calculatedHeight * calculatedHeight)).toFixed(1);
    }, [weight, height]);
    return (
            <main>
                <h1>BMI Calculator</h1>
            <div className={styles.inputSection}>
                    <p class={styles.sliderOutput}>Weight: {weight} kg</p>
                    <input 
                    className={styles.inputSlider}
                    onChange={onWeightChange}
                    type="range"
                    step="1"
                    min="40"
                    max="220" />
                    <p class={styles.sliderOutput}>Height: {height} cm</p>
                    <input 
                    className={styles.inputSlider}
                    onChange={onHeightChange}
                    type="range"
                    min="140"
                    max="220" />
                </div>
                <div className={styles.outputSection}>
                    <p>Your BMI is</p>
                    <p className={styles.output}>{output}</p>
                </div>
            </main>
    );
}

export default BMI;