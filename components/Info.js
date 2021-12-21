import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Info = ({ currentWeather }) => {
  const {
    main: { temp, feels_like, pressure, humidity },
    weather: [details],
    name,
    wind: { speed },
    sys: { sunrise, sunset, country },
  } = currentWeather;

  const { icon, main, description } = details;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.info}>
      <View style={styles.detailsStyle}>
        <View style={styles.detailDetail}>
          <FontAwesome5
            style={{ alignSelf: "center" }}
            name="temperature-low"
            size={40}
            color="#5faeb6"
          />
          <View>
            <Text>Feels like: </Text>
            <Text style={styles.detailsText}>{feels_like} °</Text>
          </View>
        </View>

        <View style={styles.detailDetail}>
          <Feather
            style={{ alignSelf: "center" }}
            name="wind"
            size={40}
            color="#5faeb6"
          />

          <View>
            <Text>Wind Speed: </Text>
            <Text style={styles.detailsText}>{speed} m/s</Text>
          </View>
        </View>
      </View>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        {country}
      </Text>
      <Text style={styles.locationStyle}>{name}</Text>
      <Image style={styles.icon} source={{ uri: iconURL }} />
      <Text style={styles.temperatureText}> {temp}°</Text>

      <Text style={{ fontSize: 25 }}>{description}</Text>
      <View style={styles.sunriseSetMain}>
        <View style={styles.shidaside}>
          <View style={styles.shidalogo}>
            <Feather name="sunrise" size={40} color="#5faeb6" />
          </View>
          <View>
            <Text>Sun-rise:</Text>
            <Text>{sunrise}</Text>
          </View>
        </View>

        <View style={styles.shidaside}>
          <View style={styles.shidalogo}>
            <Feather name="sunset" size={40} color="#5faeb6" />
          </View>
          <View>
            <Text>Sun-set:</Text>
            <Text>{sunset}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    height: 200,
    width: 200,
  },
  temperatureText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#065464",
  },

  locationStyle: {
    fontSize: 40,
  },

  detailsStyle: {
    flexDirection: "row",

    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
  detailDetail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",

    overflow: "hidden",
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#3f6184",
  },

  detailsText: {
    fontWeight: "bold",
    fontSize: 25,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sunriseSetMain: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
  },
  shidaside: {
    flexDirection: "row",

    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: "#3f6184",
    padding: 7,
  },

  shidalogo: {
    alignSelf: "center",
  },
});

export default Info;
