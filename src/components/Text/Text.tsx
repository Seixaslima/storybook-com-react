
interface TextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children: React.ReactNode;
}

export default function Text({ tag, children }: TextProps) {
  const Tag = tag || "p"
  return (
    <Tag>{children}</Tag>
  )
}

