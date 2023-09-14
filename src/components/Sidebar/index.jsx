export default function Sidebar() {
  return (
    <div 
    className=""
    style={{ 
      position: "relative"
          }}>
      <div
        style={{
          width: 296,
          height: 1080,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#75A3BF",
          borderBottomRightRadius: 25,
          borderTopRightRadius: 25,
        }}
      />
      <div
        style={{
          width: 272,
          height: 725,
          left: 0,
          top: 234,
          position: "absolute",
        }}
      >
        <div
          style={{
            left: 110,
            top: 697,
            position: "absolute",
            color: "#FBFBFB",
            fontSize: 24,
            fontFamily: "Roboto",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Logout
        </div>
        <div
          style={{
            left: 69,
            top: 226,
            position: "absolute",
            textAlign: "center",
            color: "white",
            fontSize: 24,
            fontFamily: "Roboto",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Profil Peternak
        </div>
        <div
          style={{
            left: 80,
            top: 155,
            position: "absolute",
            color: "white",
            fontSize: 24,
            fontFamily: "Roboto",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Sapi Terdata
        </div>
        <div
          style={{
            left: 87,
            top: 84,
            position: "absolute",
            color: "#FBFBFB",
            fontSize: 24,
            fontFamily: "Roboto",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Peternakan
        </div>
        <div
          style={{
            width: 272,
            height: 53,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#0D0D0D",
          }}
        ></div>
        <div
          style={{
            left: 90,
            top: 13,
            position: "absolute",
            color: "#75A3BF",
            fontSize: 24,
            fontFamily: "Roboto",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          Dashboard
        </div>
      </div>
      <div
        style={{
          width: 99,
          height: 99,
          left: 99,
          top: 57,
          position: "absolute",
          background: "#D9D9D9",
          borderRadius: 9999,
        }}
      />
    </div>
  );
}
