export default function CookbookLpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      {children}
    </>
  );
}
