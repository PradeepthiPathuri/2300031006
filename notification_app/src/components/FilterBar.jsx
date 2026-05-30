
function FilterBar({
  f,
  setF,
  sr,
  setSr
}) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        flexWrap: "wrap",
        gap: "15px"
      }}
    >

      <h3
        style={{
          margin: 0,
          color: "#111827"
        }}
      >
        Recent Notifications
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}
      >

        <input
          type="text"
          placeholder="Search notifications..."
          value={sr}
          onChange={(e) =>
            setSr(e.target.value)
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "220px"
          }}
        />

        <select
          value={f}
          onChange={(e) =>
            setF(e.target.value)
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        >
          <option>All</option>
          <option>Placement</option>
          <option>Event</option>
          <option>Result</option>
        </select>

      </div>

    </div>
  );
}

export default FilterBar;
