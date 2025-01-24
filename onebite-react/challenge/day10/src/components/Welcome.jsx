const Welcome = ({ name, isMember }) => {
  return (
    <>
      {isMember ? (
        <p>{name}님 다시 오셨군요!</p>
      ) : (
        <p>{name}님 가입하시겠어요?</p>
      )}
    </>
  );
};

Welcome.defaultProps = {
  name: "👻",
};

export default Welcome;
