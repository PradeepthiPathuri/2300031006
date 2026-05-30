function Pagination({ pg, setPg, fd, per }) {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "30px"
      }}
    >

      <button
        disabled={pg === 1}
        onClick={() => setPg(pg - 1)}
      >
        Prev
      </button>

      <button
        disabled={pg * per >= fd.length}
        onClick={() => setPg(pg + 1)}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;