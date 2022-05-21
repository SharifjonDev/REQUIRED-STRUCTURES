import React, { ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <h3>{title}</h3>;
};

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactNode;

export const List: ListComponent = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};
function EventMoreReactComponent() {
  return (
    <div>
      <Heading title="Hello" />
      {/* <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} /> */}
    </div>
  );
}

export default EventMoreReactComponent;
