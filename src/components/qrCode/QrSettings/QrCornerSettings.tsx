import QrCornerDotSettings from "./QrCorner/QrCornerDotSettings";
import QrCornerSquareSettings from "./QrCorner/QrCornerSquareSettings";

const QrCornerSettings = () => {
  return (
    <div className="space-y-4">
      <QrCornerDotSettings />
      <QrCornerSquareSettings />
    </div>
  );
};

export default QrCornerSettings;
