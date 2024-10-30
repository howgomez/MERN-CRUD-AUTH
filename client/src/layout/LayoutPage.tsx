

interface LayoutPageProps {
  children: React.ReactNode;
}

export const LayoutPage = ({ children }: LayoutPageProps) => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900">
      {children}
    </div>
  )
}