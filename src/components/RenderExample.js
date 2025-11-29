const RenderExample = () => {
  const firstRenderValue = false;
  const secondRenderValue = true;
  const thirdRenderValue = false;

  if (firstRenderValue) return <p>I'm the One</p>;

  return (
    <>
      {firstRenderValue && <p>I'm first</p>}
      {secondRenderValue && <p>I'm second</p>}
      {thirdRenderValue ? <p>I'm third</p> : <p>I'm not third</p>}
    </>
  );
};

export default RenderExample;
