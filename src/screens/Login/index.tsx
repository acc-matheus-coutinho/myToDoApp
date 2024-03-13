import { Link, Stack } from "expo-router"
import { Text } from "react-native"
import { Container } from "./styles"

export const Login = () => {
    return (
        <Container>
            {/* <Stack.Screen name="login" /> */}
            <Text style={{ fontSize: 24 }}>Login</Text>
            <Link href={{ pathname: "home" }}>Go to Home</Link>
        </Container>
    )
}