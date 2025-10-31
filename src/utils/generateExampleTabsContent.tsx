import { Fragment } from "react";

export default function generateExampleTabsContent(
  example?: React.ReactNode,
  exampleCode?: string
) {
  return [
    <Fragment key={"example"}>{example}</Fragment>,
    <pre key={"code"}>
      <code>{String.raw`${exampleCode}`}</code>
    </pre>,
  ];
}
