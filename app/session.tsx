import { Text, TouchableOpacity, View} from "react-native"
import { styles } from "./styles"
import { useRouter } from "expo-router"


export default function SessionScreen() {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Text> Next page </Text>
            <TouchableOpacity style={styles.homeButton} onPress={() => router.navigate("/")}>
                <Text style={styles.homeText}> go back </Text>
            </TouchableOpacity>
        </View>
    )
}