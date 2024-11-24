import { Skeleton } from '@/components/ui/skeleton'
export function LoadingMovie() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <div className="space-y-4">
          <Skeleton className="h-[450px] w-[300px]" />
          <div className="space-y-2">
            <Skeleton className="h-[20px] w-[200px]" />
            <Skeleton className="h-[20px] w-[180px]" />
            <Skeleton className="h-[20px] w-[160px]" />
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-[40px] w-[300px]" />
          <div className="space-y-2">
            <Skeleton className="h-[24px] w-[100px]" />
            <div className="flex gap-2">
              <Skeleton className="h-[24px] w-[80px]" />
              <Skeleton className="h-[24px] w-[80px]" />
              <Skeleton className="h-[24px] w-[80px]" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-[32px] w-[150px]" />
            <Skeleton className="h-[100px] w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-[32px] w-[150px]" />
            <Skeleton className="h-[24px] w-[200px]" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-[32px] w-[150px]" />
            <Skeleton className="h-[24px] w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
