const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function MultiplicationTable() {
  return (
    <>
      <div style={{ display: "flex" }}>
        {/* (1) */}
        {/* {num.map((n) => {
          if (n === 1 || n === 5) {
            return null;
          }
          return (
            <div key={n} style={{ padding: 10 }}>
              {n}
            </div>
          );
        })} */}

        {/* (2) */}
        {/* {num.map((n) => {
          return n !== 1 && n !== 5 && <div key={n} style={{ padding: 10 }}>{n}</div>;
        })} */}

        {/* (3) */}
        {num.map(
          (n) =>
            n !== 1 &&
            n !== 5 && (
              <div
                key={n}
                style={{
                  padding: 10,
                  color: n % 2 ? "dodgerBlue" : "black",
                }}
              >
                {num.map((m) => (
                  <div key={m}>
                    {n} x {m} = {n * m}
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </>
  );
}

export default MultiplicationTable;
