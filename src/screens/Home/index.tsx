import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router"
import { Participant, ParticipantItem } from "../../components/ParticipantItem";

const participants: Participant[] = [
  {
    id: 1,
    name: "Matheus Lenke",
    location: "Vitória"
  },
  {
    id: 1,
    name: "João Paulo",
    location: "Serra"
  },
  {
    id: 3,
    name: "Gustavo",
    location: "BH"
  }
]

export const Home = () => {
  const _ = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.eventName}>Treinamento em React Native</Text>
      <Text style={styles.eventDate}>Quarta, 13 de março de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6b6b6b'
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.participantsList}
        data={participants}
        renderItem={({ item }) => (
          <ParticipantItem key={item.id} participant={item} />
        )}
      />

    </SafeAreaView>
  )
}