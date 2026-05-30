import NotificationCard from "./NotificationCard";

function NotificationList({ cur, m, c }) {

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
        gap: "20px"
      }}
    >

      {
        cur.map((x) => (
          <NotificationCard
            key={x.ID}
            x={x}
            m={m}
            c={c}
          />
        ))
      }

    </div>
  );
}

export default NotificationList;