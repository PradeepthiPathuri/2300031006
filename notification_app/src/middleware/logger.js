import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAwMDMxMDA2QGtsdW5pdmVyc2l0eS5pbiIsImV4cCI6MTc4MDExOTg5OSwiaWF0IjoxNzgwMTE4OTk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZWQ1MDA2ZWQtZDM0ZC00NDJkLThjMTgtOTM4ZDdlNDNlMWU2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJhZGVlcHRoaSIsInN1YiI6IjAxMmFlM2YxLWRlNDgtNGQ3OC1iM2FkLTUxMzYwZmQ0ZmVmYSJ9LCJlbWFpbCI6IjIzMDAwMzEwMDZAa2x1bml2ZXJzaXR5LmluIiwibmFtZSI6InByYWRlZXB0aGkiLCJyb2xsTm8iOiIyMzAwMDMxMDA2IiwiYWNjZXNzQ29kZSI6IkF2ckFBSyIsImNsaWVudElEIjoiMDEyYWUzZjEtZGU0OC00ZDc4LWIzYWQtNTEzNjBmZDRmZWZhIiwiY2xpZW50U2VjcmV0IjoiV211QmpTWnRQRWJuV3JLayJ9.-x3zSmMSDBDbPSMIjoxuyKzmXOsd-4cEPXqNYoBk0BA";

export const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch (e) {
    console.log(e);
  }
};