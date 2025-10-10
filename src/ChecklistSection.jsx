import React from "react";
import { CheckCircle, Circle } from "lucide-react";

function ChecklistSection({
  hazardId,
  controls,
  checkedItems,
  onToggleCheck,
  t,
}) {
  // Calcular progreso
  const calculateProgress = () => {
    const controlTypes = Object.keys(controls).filter((key) => controls[key]); // Solo controles que existen
    const total = controlTypes.length;
    const completed = controlTypes.filter((type) => checkedItems[type]).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, percentage };
  };

  const progress = calculateProgress();

  return (
    <div
      style={{
        padding: "1.5rem",
        background: "rgb(249 250 251)",
        borderTop: "2px solid rgb(229 231 235)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "rgb(31 41 55)",
          }}
        >
          {t.checklist}
        </h3>

        {/* Contador de progreso */}
        <div
          style={{
            fontSize: "0.875rem",
            color: "rgb(107 114 128)",
            fontWeight: "600",
          }}
        >
          {progress.completed} {t.of} {progress.total} {t.controlsVerified} (
          {progress.percentage}%)
        </div>
      </div>

      {/* Barra de progreso visual */}
      <div
        style={{
          width: "100%",
          height: "8px",
          background: "rgb(229 231 235)",
          borderRadius: "4px",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            width: `${progress.percentage}%`,
            height: "100%",
            background:
              progress.percentage === 100
                ? "rgb(34 197 94)"
                : progress.percentage > 50
                ? "rgb(251 146 60)"
                : "rgb(239 68 68)",
            transition: "width 0.3s ease",
          }}
        />
      </div>

      {/* Lista de controles con checkboxes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Engineering Control */}
        {controls.engineering && (
          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "0.75rem",
              padding: "0.75rem",
              background: "white",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "2px solid",
              borderColor: checkedItems.engineering
                ? "rgb(34 197 94)"
                : "rgb(229 231 235)",
            }}
            onClick={() => onToggleCheck(hazardId, "engineering")}
          >
            {checkedItems.engineering ? (
              <CheckCircle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(34 197 94)",
                  flexShrink: 0,
                }}
              />
            ) : (
              <Circle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(156 163 175)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "600",
                  color: "rgb(30 58 138)",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {t.engineering}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "rgb(55 65 81)",
                  textDecoration: checkedItems.engineering
                    ? "line-through"
                    : "none",
                  opacity: checkedItems.engineering ? 0.6 : 1,
                }}
              >
                {controls.engineering}
              </div>
            </div>
          </div>
        )}

        {/* Administrative Control */}
        {controls.administrative && (
          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "0.75rem",
              padding: "0.75rem",
              background: "white",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "2px solid",
              borderColor: checkedItems.administrative
                ? "rgb(34 197 94)"
                : "rgb(229 231 235)",
            }}
            onClick={() => onToggleCheck(hazardId, "administrative")}
          >
            {checkedItems.administrative ? (
              <CheckCircle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(34 197 94)",
                  flexShrink: 0,
                }}
              />
            ) : (
              <Circle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(156 163 175)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "600",
                  color: "rgb(153 27 27)",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {t.administrative}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "rgb(55 65 81)",
                  textDecoration: checkedItems.administrative
                    ? "line-through"
                    : "none",
                  opacity: checkedItems.administrative ? 0.6 : 1,
                }}
              >
                {controls.administrative}
              </div>
            </div>
          </div>
        )}

        {/* PPE Control */}
        {controls.ppe && (
          <div
            style={{
              display: "flex",
              alignItems: "start",
              gap: "0.75rem",
              padding: "0.75rem",
              background: "white",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "2px solid",
              borderColor: checkedItems.ppe
                ? "rgb(34 197 94)"
                : "rgb(229 231 235)",
            }}
            onClick={() => onToggleCheck(hazardId, "ppe")}
          >
            {checkedItems.ppe ? (
              <CheckCircle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(34 197 94)",
                  flexShrink: 0,
                }}
              />
            ) : (
              <Circle
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "rgb(156 163 175)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "600",
                  color: "rgb(30 64 175)",
                  marginBottom: "0.25rem",
                  fontSize: "0.875rem",
                }}
              >
                {t.ppe}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "rgb(55 65 81)",
                  textDecoration: checkedItems.ppe ? "line-through" : "none",
                  opacity: checkedItems.ppe ? 0.6 : 1,
                }}
              >
                {controls.ppe}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChecklistSection;
