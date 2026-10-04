import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5ad6d4",
      }}
    >
      <Text 
        style={{ 
          fontSize: 24, 
          fontWeight: "bold", 
          color: "#0b0a0a",
          position: 'absolute',
          top: 10,
        }}
      >
        Welcome to our Mini App
      </Text>

      <View style={{ 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 150,
      }}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            overflow: "hidden",
            borderWidth: 3,
            borderColor: "#f8f8f8",
            marginBottom: 15,
          }}
        >
          <Image
            source={require("../assets/images/picture namo.jpg")}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View> 

        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0c0c0c" }}>
          Angeline Langam
        </Text>

        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0b0b0b"}}>
          Shamie Barba
        </Text>

      </View>
    </View>
  );
}