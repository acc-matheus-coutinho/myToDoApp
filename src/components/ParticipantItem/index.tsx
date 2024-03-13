import { View, ViewProps, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"

export type Participant = {
  id: number;
  name: string;
  location: string;
}

export interface Props extends ViewProps {
  participant: Participant
}

export function ParticipantItem({ participant }: Props) {

  return (
    <View style={styles.participantItem}>
      <View>
        <Text style={styles.participantName}>
          {participant.name}
        </Text>
        <Text style={styles.participantLocation}>
          {participant.location}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}