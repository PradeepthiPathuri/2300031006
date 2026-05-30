
function Navbar({ uc }) {

  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        padding: "18px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}
    >

      <h2
        style={{
          margin: 0
        }}
      >
        NotifyHub 🔔
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px"
        }}
      >

        <p
          style={{
            margin: 0
          }}
        >
          Responsive Notification App
        </p>

        <div
          style={{
            background: "#2563eb",
            padding: "8px 14px",
            borderRadius: "20px",
            fontWeight: "bold"
          }}
        >
          Unread: {uc}
        </div>

      </div>

    </div>
  );
}

export default Navbar;
