interface BoxConatinerProps {
  children: React.ReactNode;
}

export default function BoxConatiner({ children }: BoxConatinerProps) {
  return <section className="box-container">{children}</section>;
}
