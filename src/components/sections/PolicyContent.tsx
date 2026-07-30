import Container from "@/components/ui/Container";

type PolicyContentProps = {
  children: React.ReactNode;
};

export default function PolicyContent({ children }: PolicyContentProps) {
  return (
    <section className="section-y-policy">
      <Container>
        <div className="policy-content mx-auto max-w-3xl">{children}</div>
      </Container>
    </section>
  );
}
