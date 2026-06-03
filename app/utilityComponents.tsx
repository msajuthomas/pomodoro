import { styles } from "./styles"
import { View } from "react-native"

export function Slider() {
    return (
        <View style={styles.timeSliderTrack}>
            <View style={styles.timeSlider}></View>
        </View>
    )
}