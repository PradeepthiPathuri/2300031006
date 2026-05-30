function NotificationCard({ x, m, c }) {

  return (
    <div
      onClick={() => m(x.ID)}
      style={{
        background: "white",
        borderRadius: "14px",
        padding: "20px",
        cursor: "pointer",
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.08)",
        borderLeft:
          `6px solid ${c(x.Type)}`,
        opacity: x.read ? 0.7 : 1
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >

        <span
          style={{
            background: c(x.Type),
            color: "white",
            padding: "5px 10px",
            borderRadius: "20px",
            fontSize: "12px"
          }}
        >
          {x.Type}
        </span>

        {
          !x.read &&
          <span style={{ color: "#2563eb" }}>
            New
          </span>
        }

      </div>

      <h3>{x.Message}</h3>

      <small>{x.Timestamp}</small>

    </div>
  );
}

export default NotificationCard;