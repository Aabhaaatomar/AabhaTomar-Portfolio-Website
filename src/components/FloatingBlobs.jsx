export default function FloatingBlobs({ variant = 'default' }) {
  if (variant === 'hero') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-violet-700/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -right-32 w-[460px] h-[460px] bg-violet-500/20 rounded-full blur-[120px] animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-violet-900/30 rounded-full blur-[110px] animate-blob [animation-delay:8s]" />
      </div>
    )
  }
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[380px] h-[380px] bg-violet-700/10 rounded-full blur-[110px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[340px] h-[340px] bg-violet-500/10 rounded-full blur-[110px] animate-blob [animation-delay:6s]" />
    </div>
  )
}
