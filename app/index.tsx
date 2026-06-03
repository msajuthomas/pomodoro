import { Text, View, TouchableOpacity} from "react-native";
import { styles } from "./styles"
import { useRouter } from "expo-router"
import { Slider } from "./utilityComponents"

export default function HomeScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text >Pomodoro</Text>
      <TouchableOpacity onPress={() => router.navigate("/session")} style={styles.homeButton}>
        <Text style={styles.homeText}>    Begin Session    </Text>
      </TouchableOpacity>
      <Slider></Slider>
    </View>
  );
}

