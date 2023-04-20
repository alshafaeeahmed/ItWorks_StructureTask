// Outer imports:
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

const ProfileScreen = () => {
  const renderWhiteSheet = () => {
    return (
      <View style={styles().sheetContainer}>
        {renderHeyUser()}
        {renderLogout()}
      </View>
    );
  };

  const renderHeyUser = () => {
    return (
      <>
        <View style={styles().textsContainer}>
          <View style={styles().heyUser}>
            <RegularText content={"Hey user,"} />
          </View>
          <RegularText content={"Good to see you"} />
        </View>
      </>
    );
  };

  const renderLogout = () => {
    return (
      <Pressable
        style={styles().logoutContainer}
        onPress={() => {
          console.log("pressed logout");
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icons.user_logout} style={styles().logoutIcon} />
          <RegularText content={"logout"} />
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles().mainContainer}>
      {renderWhiteSheet()}
      {renderLogout()}
    </View>
  );
};

export default ProfileScreen;

const styles = (lottieArrowDirection?: string) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.lime
    },

    sheetContainer: {
      marginTop: "15%",
      height: SCREEN_HEIGHT / 1.5,
      backgroundColor: colors.white,
      borderTopRightRadius: 35,
      borderTopLeftRadius: 35,
      paddingVertical: paddings._32px
    },

    textsContainer: {
      paddingHorizontal: paddings._16px,
      paddingTop: paddings._12px
    },
    heyUser: {
      paddingHorizontal: paddings._16px,
      paddingBottom: paddings._8px
    },

    // ARROW ANIMATION
    arrowAnimation: {
      width: 15,
      height: 15,
      transform: [
        lottieArrowDirection === Directions.LEFT
          ? { rotate: "45deg" }
          : { rotate: "-45deg" }
      ],
      opacity: 0.5
    },

    logoutContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderTopWidth: 0.8,
      borderStyle: "dashed",
      borderTopColor: colors.transparentBlack7,
      padding: paddings._16px
    },
    logoutIcon: {
      height: 25,
      width: 25,
      tintColor: colors.darkLime,
      marginRight: i18n.locale === HE ? paddings._4px : 0,
      marginLeft: i18n.locale === HE ? 0 : paddings._4px,
      transform: i18n.locale === HE ? [{ scaleX: -1 }] : [{ scaleX: 1 }]
    }
  });
