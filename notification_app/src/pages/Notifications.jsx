
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import NotificationList from "../components/NotificationList";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

function Notifications() {

  const [n, setN] = useState([]);
  const [msg, setMsg] = useState("");
  const [tp, setTp] = useState("Placement");
  const [f, setF] = useState("All");
  const [sr, setSr] = useState("");
  const [pg, setPg] = useState(1);

  const per = 4;

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAwMDMxMDA2QGtsdW5pdmVyc2l0eS5pbiIsImV4cCI6MTc4MDExOTg5OSwiaWF0IjoxNzgwMTE4OTk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZWQ1MDA2ZWQtZDM0ZC00NDJkLThjMTgtOTM4ZDdlNDNlMWU2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJhZGVlcHRoaSIsInN1YiI6IjAxMmFlM2YxLWRlNDgtNGQ3OC1iM2FkLTUxMzYwZmQ0ZmVmYSJ9LCJlbWFpbCI6IjIzMDAwMzEwMDZAa2x1bml2ZXJzaXR5LmluIiwibmFtZSI6InByYWRlZXB0aGkiLCJyb2xsTm8iOiIyMzAwMDMxMDA2IiwiYWNjZXNzQ29kZSI6IkF2ckFBSyIsImNsaWVudElEIjoiMDEyYWUzZjEtZGU0OC00ZDc4LWIzYWQtNTEzNjBmZDRmZWZhIiwiY2xpZW50U2VjcmV0IjoiV211QmpTWnRQRWJuV3JLayJ9.-x3zSmMSDBDbPSMIjoxuyKzmXOsd-4cEPXqNYoBk0BA";

  useEffect(() => {

    const d = [
      {
        ID: 1,
        Type: "Placement",
        Message: "Amazon shortlisted students",
        Timestamp: "10:30 AM",
        read: false
      },
      {
        ID: 2,
        Type: "Event",
        Message: "Hackathon starts tomorrow",
        Timestamp: "11:00 AM",
        read: false
      },
      {
        ID: 3,
        Type: "Result",
        Message: "Mid marks released",
        Timestamp: "12:00 PM",
        read: false
      },
      {
        ID: 4,
        Type: "Placement",
        Message: "Google interview round",
        Timestamp: "1:00 PM",
        read: false
      },
      {
        ID: 5,
        Type: "Event",
        Message: "Workshop at 2 PM",
        Timestamp: "2:00 PM",
        read: false
      },
      {
        ID: 6,
        Type: "Result",
        Message: "Assignment marks uploaded",
        Timestamp: "3:00 PM",
        read: false
      },
      {
        ID: 7,
        Type: "Placement",
        Message: "TCS hiring drive announced",
        Timestamp: "4:00 PM",
        read: false
      }
    ];

    const p = {
      Placement: 3,
      Event: 2,
      Result: 1
    };

    const s = d.sort(
      (a, b) => p[b.Type] - p[a.Type]
    );

    setN(s);

  }, []);

  const lg = async (msg) => {

    try {

      await fetch(
        "http://4.224.186.213/evaluation-service/logs",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({
            stack: "frontend",
            level: "info",
            package: "component",
            message: msg
          })

        }
      );

    } catch (e) {
      console.log(e);
    }
  };

  const c = (t) => {
    if (t === "Placement") return "#2563eb";
    if (t === "Event") return "#16a34a";
    return "#dc2626";
  };

  const fd = n.filter((x) => {

    const mt =
      f === "All" ||
      x.Type === f;

    const ms =
      x.Message
        .toLowerCase()
        .includes(sr.toLowerCase());

    return mt && ms;

  });

  const st = (pg - 1) * per;

  const cur = fd.slice(st, st + per);

  const uc =
    n.filter((x) => !x.read).length;

  const mr = () => {

    setN(
      n.map((x) => ({
        ...x,
        read: true
      }))
    );

    lg("all notifications marked read");
  };

  const m = (id) => {

    setN(
      n.map((x) =>
        x.ID === id
          ? { ...x, read: true }
          : x
      )
    );

    lg("notification opened");
  };

  const ad = () => {

    if (!msg) return;

    const nw = {
      ID: Date.now(),
      Type: tp,
      Message: msg,
      Timestamp: new Date().toLocaleTimeString(),
      read: false
    };

    const up = [nw, ...n];

    const p = {
      Placement: 3,
      Event: 2,
      Result: 1
    };

    const s = up.sort(
      (a, b) => p[b.Type] - p[a.Type]
    );

    setN(s);

    lg("notification added");

    setMsg("");

    setPg(1);
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh"
      }}
    >

      <Navbar uc={uc} />

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "30px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "25px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)"
          }}
        >

          <h3
            style={{
              marginBottom: "15px"
            }}
          >
            Admin Panel
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
              placeholder="Enter notification"
              value={msg}
              onChange={(e) =>
                setMsg(e.target.value)
              }
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />

            <select
              value={tp}
              onChange={(e) =>
                setTp(e.target.value)
              }
              style={{
                padding: "12px",
                borderRadius: "8px"
              }}
            >
              <option>Placement</option>
              <option>Event</option>
              <option>Result</option>
            </select>

            <button
              onClick={ad}
              style={{
                padding: "12px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Add
            </button>

          </div>

        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "15px"
          }}
        >

          <button
            onClick={mr}
            style={{
              padding: "10px 18px",
              background: "#111827",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Mark All Read
          </button>

        </div>

        <FilterBar
          f={f}
          setF={(v) => {
            setF(v);
            lg("filter changed");
          }}
          sr={sr}
          setSr={setSr}
        />

        <NotificationList
          cur={cur}
          m={m}
          c={c}
        />

        <Pagination
          pg={pg}
          setPg={setPg}
          fd={fd}
          per={per}
        />

        <Footer />

      </div>

    </div>
  );
}

export default Notifications;
