interface AccordionContentProps {
  children: React.ReactNode;
}

export default function AccordionContent({ children }: AccordionContentProps) {
  return <section>{children}</section>;
}
