window.onload = () => {
  const root = document.documentElement;
  const originalValues = {
    "degree": 45,
    "p1": 0,
    "p2": 7,
    "p3": 9,
    "p4": 11,
    "p5": 26,
    "p6": 34,
    "p7": 41,
    "p8": 100
  };

  document.addEventListener("mousemove", ev => {
    const [sourceX, sourceY] = [ev.pageX, window.innerHeight - ev.pageY];

    //gradient degree
    const degree = Math.atan2(sourceX, sourceY) * 180/Math.PI;
    const converterDegree = ((degree / 90) * 100 - 50) * 0.01;
    const degreeSensitivity = 5;
    const finalDegree = originalValues.degree + converterDegree * degreeSensitivity;

    root.style.setProperty("--degree", `${finalDegree}deg`);

    //gradient stripes
    const [fromOX, fromOY] = [sourceX / window.innerWidth * 100, sourceY / window.innerHeight * 100];
    const converterStripes = (fromOX + fromOY - 100) * 0.001;
    const stripesSensitivity = 25;

    root.style.setProperty("--p2", `${originalValues.p2 + converterStripes * stripesSensitivity}%`);
    root.style.setProperty("--p3", `${originalValues.p3 + converterStripes * stripesSensitivity}%`);
    root.style.setProperty("--p4", `${originalValues.p4 + converterStripes * stripesSensitivity}%`);
    root.style.setProperty("--p5", `${originalValues.p5 + converterStripes * stripesSensitivity}%`);
    root.style.setProperty("--p6", `${originalValues.p6 + converterStripes * stripesSensitivity}%`);
    root.style.setProperty("--p7", `${originalValues.p7 + converterStripes * stripesSensitivity}%`);
  })
};
