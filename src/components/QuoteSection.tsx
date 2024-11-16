type QuoteContainerProps = {
  children: React.ReactNode;
};
export default function QuoteSection({ children }: QuoteContainerProps) {
  return <section className="px-[1.625rem] md:px-[4rem] lg:px-[10.313rem]">{children}</section>;
}
