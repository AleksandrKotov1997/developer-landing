import styles from "./HeroCodeCard.module.scss";

const profile = {
  name: "Aleksandr Kotov",
  role: "Frontend Engineer",
  frontend: ["React", "TypeScript", "TanStack Query"],
  backend: ["Node.js", "Express", "Zod"],
  product: ["Admin UI", "Data flows", "API contracts"],
  engineering: ["Feature delivery", "Refactoring", "Code review"],
} as const;

const formatArray = (items: readonly string[]) => {
  return `[${items.map((item) => `"${item}"`).join(", ")}]`;
};

type CodeLine = {
  property: keyof typeof profile;
  value: string;
  type: "string" | "array";
};

const codeLines = [
  {
    property: "name",
    value: `"${profile.name}"`,
    type: "string",
  },
  {
    property: "role",
    value: `"${profile.role}"`,
    type: "string",
  },
  {
    property: "frontend",
    value: formatArray(profile.frontend),
    type: "array",
  },
  {
    property: "backend",
    value: formatArray(profile.backend),
    type: "array",
  },
  {
    property: "product",
    value: formatArray(profile.product),
    type: "array",
  },
  {
    property: "engineering",
    value: formatArray(profile.engineering),
    type: "array",
  },
] satisfies CodeLine[];

export const HeroCodeCard = () => {
  return (
    <aside className={styles.card} aria-label="Developer profile code card">
      <div className={styles.header}>
        <div className={styles.controls} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <span className={styles.fileName}>kotov.profile.ts</span>
      </div>

      <pre className={styles.code}>
        <code>
          <span className={styles.line}>
            <span className={styles.keyword}>const</span>{" "}
            <span className={styles.variable}>profile</span>{" "}
            <span className={styles.operator}>=</span>{" "}
            <span className={styles.brace}>{"{"}</span>
          </span>

          {codeLines.map((line) => (
            <span className={styles.line} key={line.property}>
              <span className={styles.indent} />
              <span className={styles.property}>{line.property}</span>:{" "}
              <span
                className={
                  line.type === "string" ? styles.string : styles.array
                }
              >
                {line.value}
              </span>
              ,
            </span>
          ))}

          <span className={styles.line}>
            <span className={styles.brace}>{"}"}</span>;
          </span>
        </code>
      </pre>
    </aside>
  );
};
