import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const progress = useProgress();
  const percentage: number = (progress.loaded / progress.total) * 100;

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>

      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {percentage.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
