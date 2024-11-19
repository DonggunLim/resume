interface BoxConatinerProps {
  children: React.ReactNode;
}

export default function BoxConatiner({ children }: BoxConatinerProps) {
  return (
    <section
      className="relaitve rounded-xl bg-white border-none shadow-md 
      dark:bg-slate-800 dark:text-slate-300
    "
    >
      {children}
    </section>
  );
}
