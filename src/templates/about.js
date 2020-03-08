import React from "react"
import about from "../../static/about.jpg"
import Layout from "../components/layout"
import { useMediaQuery } from "react-responsive"

const AboutTemplate = () => {
  const isMaxDeviceWidthUpto640 = useMediaQuery({ query: '(max-device-width: 640px)' })

  return (
    <Layout>
      <img
        src={about}
        width={isMaxDeviceWidthUpto640 ? 288 : 360}
        height={isMaxDeviceWidthUpto640 ? 288 : 360}
        alt="about"
        style={styles.aboutImage}
      />
      <div style={styles.infoWrapper}>
        <p style={styles.fullName}>Gyu Kang</p>
        <div>
          <h4 style={styles.section}>location</h4>
          <p style={styles.body}>South Korea</p>
        </div>
        <div>
          <h4 style={styles.section}>camera</h4>
          <p style={styles.body}>Canon EOS M5</p>
        </div>
        <div>
          <h4 style={styles.section}>connect</h4>
          <p style={styles.body}>
            Instagram: <a href="https://instagram.com/gyukang.photo"
                          style={styles.link}>https://instagram.com/gyukang.photo</a><br/>
          </p>
        </div>
        <p style={styles.catchPhrase}>"마음이 일렁이는 순간을 담아요"</p>
      </div>
    </Layout>
  )
}

const styles = {
  aboutImage: {
    borderRadius: "50%",
    border: "6px solid white",
    boxShadow: "0 0 3px 0 rgba(0, 0, 0, 0.1)",
    marginTop: 20,
    marginBottom: 0,
  },
  infoWrapper: {
    margin: 25,
  },
  fullName: {
    fontFamily: ["Sarina", "sans-serif"],
    fontWeight: 800,
    fontSize: `1.5em`,
    marginLeft: -1,
  },
  section: {
    fontFamily: ["Sen", "sans-serif"],
    fontWeight: 800,
    margin: 0,
  },
  body: {
    fontFamily: ["Sen", "sans-serif"],
    fontWeight: 400,
    fontSize: `0.75em`,
  },
  link: {
    color: "hsla(0, 0%, 0%, 0.8)",
  },
  catchPhrase: {
    fontFamily: ["Noto Serif KR", "serif"],
    color: "darkgray",
    fontSize: `0.9em`,
    margin: 0,
  },
}

export default AboutTemplate
