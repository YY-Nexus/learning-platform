import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-12 w-64 mb-6" />
        <div className="border rounded-lg">
          <div className="h-[600px] p-4 space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={i % 2 === 0 ? "flex justify-start" : "flex justify-end"}>
                <Skeleton className={`h-16 ${i % 2 === 0 ? "w-3/4" : "w-2/3"} rounded-lg`} />
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
