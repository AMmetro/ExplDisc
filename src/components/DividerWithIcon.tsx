export function DividerWithIcon() {
  return (
    <div className="flex justify-center items-center h-full pl-4">
      <div className="w-px h-full bg-grey-5 flex flex-col justify-center" />
      <div className="absolute border-t-4 border-b-4 border-white">
        <div className="w-8 h-6 flex flex-row justify-center items-center rounded-3xl bg-grey-6 text-grey-2">
          <span>+</span>
        </div>
      </div>
    </div>
  )
}
